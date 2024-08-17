import axios from 'axios';
import { CurrencyResponse, CurrencyRates} from '../interfaces';

export class ApiService {
    private apiUrl: string;
    private apiVersion: string;

    constructor() {
        this.apiUrl = process.env.API_URL || 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api';
        this.apiVersion = process.env.API_VERSION || 'v1';
    }

    async getExchangeRate(fromCurrency: string, toCurrency: string, date: Date): Promise<number> {
        try {
            const strDate = date.toISOString().split('T')[0];
            const response = await axios.get<CurrencyResponse>(`${this.apiUrl}@${strDate}/${this.apiVersion}/currencies/${fromCurrency}.json`);
            
            if (typeof response.data[fromCurrency] === 'string') {
                throw new Error(response.data[fromCurrency]);
            } else if (typeof response.data[fromCurrency][toCurrency] !== 'number') {
                throw new Error(`Exchange rate not found for ${fromCurrency} to ${toCurrency}`);
            } else {
                return response.data[fromCurrency][toCurrency];
            }
        } catch (error) {
            if (error instanceof axios.AxiosError && error.response) {
                throw new Error(error.response.data);
            } else
            if (error instanceof Error && error.message) {
                throw new Error(error.message);
            } else {
                throw new Error('Unkwnown error while fetching exchange rates from API');
            }
        }
    }
}
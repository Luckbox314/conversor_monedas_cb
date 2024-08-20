import { ApiService } from './apiService';
import { conversionResponse } from '../interfaces';

export class ConversionService {
  private apiService: ApiService;
  public transactionFee: number;


  constructor(apiService?: ApiService) {
    this.apiService = apiService || new ApiService();
    this.transactionFee = Number(process.env.TRANSACTION_FEE) || 0.95;
  }

  async convertCurrency(fromCurrency: string, fromAmount: number, targetCurrency: string, targetAmount: number): Promise<conversionResponse> {
    const rate = await this.apiService.getExchangeRate(fromCurrency, targetCurrency, new Date());
    const finalExchangeRate = rate * this.transactionFee;
    const conversionResponse = {
      value: 0,
      exchangeRate: 0,
    } as conversionResponse;
    if (fromAmount === 0 && targetAmount === 0) {
      throw new Error('Both fromAmount and targetAmount cannot be 0 at the same time');
    } else if (fromAmount !== 0 && targetAmount !== 0) {
      throw new Error('Either fromAmount or targetAmount must be 0');
    }
    
    if (fromAmount === 0) {
      conversionResponse.value = targetAmount / finalExchangeRate;
    } else if (targetAmount === 0) {
      conversionResponse.value = fromAmount * finalExchangeRate;
    }

    if (fromCurrency === "clp") {
      if (fromAmount === 0) {
        conversionResponse.exchangeRate = 1 / finalExchangeRate;
      } else {
        conversionResponse.exchangeRate = 1 / finalExchangeRate;
      }
    } else {
      if (fromAmount === 0) {
        conversionResponse.exchangeRate = finalExchangeRate;
      } else {
        conversionResponse.exchangeRate = finalExchangeRate
      }
    }
    return conversionResponse;
  }
}
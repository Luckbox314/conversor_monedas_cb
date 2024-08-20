import axios from 'axios';
import { trimInsignificantDecimals } from '../utils';


const backendApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface BackendResponse {
    value: number;
    exchangeRate: number;
};

export const fetchMissingValue = async (
    fromCurrency: string,
    fromAmount: number,
    targetCurrency: string,
    targetAmount: number
): Promise<BackendResponse> => {
    if (fromAmount == 0 && targetAmount == 0) {
        return { value: 0, exchangeRate: 0 };
    }
    const response = await backendApi.get<BackendResponse>(
        `/api/convert`,
        {
            params: {
                fromCurrency,
                fromAmount,
                targetCurrency,
                targetAmount,
            },
        }
    );
    if (response.status !== 200) {
        throw new Error('Failed to fetch data');
    }


    return {
        value: trimInsignificantDecimals(response.data.value),
        exchangeRate: trimInsignificantDecimals(response.data.exchangeRate) };
};
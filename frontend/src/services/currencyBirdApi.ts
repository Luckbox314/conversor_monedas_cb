import axios from 'axios';
import { Currency } from '../types';

const currencyBirdApi = axios.create({
  baseURL: process.env.REACT_APP_CURRENCYBIRD_API || 'https://elb.currencybird.cl/apigateway-cb/api/public',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCurrencyBirdSendCountries = async (): Promise<any> => {
    const response = await currencyBirdApi.get<Currency[]>(`/sendCountries`);
    if (response.status !== 200) {
        throw new Error('Failed to fetch data');
    }
    return response.data;
};

export const fetchCurrencyBirdIncomingCountries = async (): Promise<any> => {
  const response = await currencyBirdApi.get<Currency[]>(`/incomingCountries`);
  if (response.status !== 200) {
      throw new Error('Failed to fetch data');
  }
  return response.data;
};
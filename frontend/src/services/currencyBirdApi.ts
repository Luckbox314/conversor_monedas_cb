import axios from 'axios';

const currencyBirdApi = axios.create({
  baseURL: process.env.REACT_APP_CURRENCYBIRD_API || 'https://elb.currencybird.cl/apigateway-cb/api/public',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCurrencyBirdSendCountries = async (): Promise<any> => {
    const response = await currencyBirdApi.get(`/sendCountries`);
    if (response.status !== 200) {
        throw new Error('Failed to fetch data');
    }
    return response.data;
};

export const fetchCurrencyBirdIncomingCountries = async (): Promise<any> => {
  const response = await currencyBirdApi.get(`/incomingCountries`);
  if (response.status !== 200) {
      throw new Error('Failed to fetch data');
  }
  return response.data;
};
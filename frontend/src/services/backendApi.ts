import axios from 'axios';

const backendApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface BackendResponse {
    convertedAmount: number;
};

export const fetchMissingValue = async (
    fromCurrency: string,
    fromAmount: number,
    targetCurrency: string,
    targetAmount: number
): Promise<any> => {
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
    return response.data;
};
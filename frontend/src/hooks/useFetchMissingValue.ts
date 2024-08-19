import { useState, useEffect } from 'react';
import { fetchMissingValue } from '../services';

export const useFetchMissingValue = (
    fromCurrency: string,
    fromAmount: number,
    targetCurrency: string,
    targetAmount: number
) => {
  const [value, setValue] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getValue = async () => {
      try {
        const result = await fetchMissingValue(
            fromCurrency, fromAmount, targetCurrency, targetAmount
        );
        setValue(result.convertedAmount);
      } catch (err) {
        setError('Failed to convert currency using backend API');
      } finally {
        setLoading(false);
      }
    };

    getValue();
  }, []);

  return { value, loading, error };
};

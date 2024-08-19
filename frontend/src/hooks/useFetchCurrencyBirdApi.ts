import { useState, useEffect } from 'react';
import { fetchCurrencyBirdIncomingCountries, fetchCurrencyBirdSendCountries } from '../services';
import { Currency } from '../types';

export const useFetchCurrencyBirdIncoming = () => {
  const [data, setData] = useState<Currency[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchCurrencyBirdIncomingCountries();
        setData(result);
      } catch (err) {
        setError('Failed to get Incoming data from Currency Bird API');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, loading, error };
};

export const useFetchCurrencyBirdSend = () => {
    const [data, setData] = useState<Currency[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const result = await fetchCurrencyBirdSendCountries();
          setData(result);
        } catch (err) {
          setError('Failed to get Send data from Currency Bird API');
        } finally {
          setLoading(false);
        }
      };
  
      getData();
    }, []);
  
    return { data, loading, error };
  };

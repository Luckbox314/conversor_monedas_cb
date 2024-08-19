import { useEffect, useState } from 'react';
import { 
  SyledCurrencyConverterContainer,
  StyledSubmitButton,
} from '../styles/CurrencyConverter.styles';
import {
  ClpSelector,
  OtherSelector,
  OperationIndicator, 
} from '../components';
import {
  fetchMissingValue,
} from '../services';
import { Currency } from '../types';



export const CurrencyConverter = () => {
  const [clpValue, setClpValue] = useState(0);
  const [otherValue, setOtherValue] = useState(0);
  const [selectedCurrency, setselectedCurrency] = useState<Currency | undefined>(undefined);
  const [transactionType, setTransactionType] = useState('send');

  const handleClpAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newClpValue = Number(event.target.value);
    setClpValue(newClpValue);
    if (transactionType === 'send' && selectedCurrency) {
      // CLP to other currency
      fetchMissingValue('CLP', newClpValue, selectedCurrency.currency || '', 0)
      .then((value) => {
        setOtherValue(value)
      });
    } else if (transactionType === 'receive' && selectedCurrency) {
      // other currency to CLP
      fetchMissingValue(selectedCurrency.currency, 0, 'CLP', newClpValue)
      .then((value) => {
        setOtherValue(value)
      });
    }
  };

  const handleOtherAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newOtherValue = Number(event.target.value);
    setOtherValue(newOtherValue);
    if (transactionType === 'send' && selectedCurrency) {
      fetchMissingValue(selectedCurrency.currency, newOtherValue, 'CLP', 0)
      .then((value) => {
        setClpValue(value)
      });
    } else if (transactionType === 'receive' && selectedCurrency) {
      // CLP to other currency
      fetchMissingValue('CLP', 0, selectedCurrency.currency, newOtherValue)
      .then((value) => {
        setClpValue(value)
      });
    }
  };

  useEffect(() => {
    if (transactionType === 'send' && selectedCurrency) {
      fetchMissingValue('CLP', clpValue, selectedCurrency.currency || '', 0)
      .then((value) => {
        setOtherValue(value)
      });
    } else if (transactionType === 'receive' && selectedCurrency) {
      fetchMissingValue(selectedCurrency.currency, 0, 'CLP', clpValue)
      .then((response) => {
        setOtherValue(response)
      });
    }
  }, [transactionType, selectedCurrency]);

  const handleOtherCurrencyChange = (currency: Currency | undefined) => {
    setselectedCurrency(currency);
  };


  return (
    <SyledCurrencyConverterContainer>

        <ClpSelector
          value={clpValue}
          handleChange={handleClpAmountChange}
        />

        <OperationIndicator
          transactionType={transactionType}
          setTransactionType={setTransactionType}
        />

        <OtherSelector
          value={otherValue}
          selectedCurrency={selectedCurrency}
          transactionType={transactionType}
          handleAmountChange={handleOtherAmountChange}
          handleCurrencyChange={handleOtherCurrencyChange}
        />

        {/* Send Button */}
        <StyledSubmitButton
          send={transactionType === 'send'}
          href='https://www.currencybird.cl/'
        >
          {transactionType === 'send' ? <h2>Enviar</h2> : <h2>Recibir</h2>}
        </StyledSubmitButton>
        
    </SyledCurrencyConverterContainer>
  );
}

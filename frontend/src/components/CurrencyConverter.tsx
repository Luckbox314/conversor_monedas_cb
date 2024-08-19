import { useState } from 'react';
import { 
  SyledCurrencyConverterContainer,
  StyledSubmitButton,
} from '../styles/CurrencyConverter.styles';
import {
  ClpSelector,
  OtherSelector,
  OperationIndicator, 
} from '../components';
import { Currency } from '../types';



export const CurrencyConverter = () => {
  const [clpValue, setClpValue] = useState(0);
  const [otherValue, setOtherValue] = useState(0);
  const [selectedCurrency, setselectedCurrency] = useState<Currency | undefined>(undefined);
  const [transactionType, setTransactionType] = useState('send');

  const handleClpAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClpValue(Number(event.target.value));
    // send request to get the other ammount
  };

  const handleOtherAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherValue(Number(event.target.value));
    // send request to get the clp ammount
  };

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

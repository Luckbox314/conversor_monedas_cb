import React from 'react';
import { SyledCurrencyConverterContainer } from '../styles/CurrencyConverter.styles';


export const CurrencyConverter = () => {
  return (
    <SyledCurrencyConverterContainer>
        {/* Left input */}
        <div>Left</div>

        {/* Middle zone */}
        <div>Midle</div>

        {/* Right input (with dropdawn for currency Type)*/}
        <div>Right</div>

        {/* Send Button */}
        <div>Send</div>
    </SyledCurrencyConverterContainer>
  );
}

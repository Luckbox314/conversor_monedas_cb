import { useEffect, useState } from "react";
import {
    StyledCurrencyInput,
    CurrencyAmountContainer,
    StyledAmountLabel,
    StyledAmountInput
} from "../../styles/CurrencyInput.styles";
import { CurrencyDropDownSelector } from "..";
import {
    useFetchCurrencyBirdIncoming,
    useFetchCurrencyBirdSend
} from "../../hooks";
import { Currency } from "../../types";
import { getImageUrl, sortCurrencies } from '../../utils';

interface OtherSelectorProps {
    value: number;
    selectedCurrency: Currency | undefined;
    transactionType: string;
    handleAmountChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    handleCurrencyChange: (currency: Currency | undefined) => void;
}

const FLAG_API_URL = 'https://flagsapi.com/BE/flat/64.png';

export const OtherSelector: React.FC<OtherSelectorProps> = (
    {
        value,
        selectedCurrency,
        transactionType,
        handleAmountChange,
        handleCurrencyChange,
    }
) => {
    const {
        data: incomingCurrencies,
        loading: incomingLoading,
        error: incomingError
    } = useFetchCurrencyBirdIncoming();

    const {
        data: sendCurrencies,
        loading: sendLoading,
        error: sendError
    } = useFetchCurrencyBirdSend();

    useEffect(() => {
        if (transactionType === 'send' && !selectedCurrency && sendCurrencies) {
            handleCurrencyChange(sendCurrencies.sort(sortCurrencies)[0]);
        } else if (transactionType === 'receive' && !selectedCurrency && incomingCurrencies) {
            handleCurrencyChange(incomingCurrencies.sort(sortCurrencies)[0]);
        }
    }, [incomingCurrencies, sendCurrencies]);


    useEffect(() => {
        if (transactionType === 'send' && sendCurrencies) {
            if (selectedCurrency && !sendCurrencies.find((curr) => curr.id === selectedCurrency.id)) {
                handleCurrencyChange(sendCurrencies.sort(sortCurrencies)[0]);
            }
        } else if (transactionType === 'receive' && incomingCurrencies) {
            if (selectedCurrency && !incomingCurrencies.find((curr) => curr.id === selectedCurrency.id)) {
                handleCurrencyChange(incomingCurrencies.sort(sortCurrencies)[0]);
            }
        }
    }, [transactionType]);

    return (
        <StyledCurrencyInput>
            { transactionType === 'send' ?
                sendCurrencies &&  
                <CurrencyDropDownSelector 
                    selectedCurrency={selectedCurrency}
                    currencies={sendCurrencies}
                    handleChange={handleCurrencyChange}
                /> :
                incomingCurrencies &&
                <CurrencyDropDownSelector 
                    selectedCurrency={selectedCurrency}
                    currencies={incomingCurrencies}
                    handleChange={handleCurrencyChange}
                />
            }

            <CurrencyAmountContainer>
                <StyledAmountLabel>Amount: </StyledAmountLabel>
                <StyledAmountInput
                    type="number"
                    value={value}
                    onChange={handleAmountChange}
                />
            </CurrencyAmountContainer>
        </StyledCurrencyInput>
    );
}
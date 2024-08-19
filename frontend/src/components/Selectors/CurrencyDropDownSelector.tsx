import { useState } from 'react';
import { Currency } from '../../types';
import {
    DropdownContainer,
    DropdownHeader,
    DropdownListContainer,
    DropdownList,
    ListItem,
    OptionImage
} from '../../styles/Dropdown.styles';

import { getImageUrl, sortCurrencies } from '../../utils';


interface CurrencyDropDownSelectorProps {
    selectedCurrency: Currency | undefined;
    currencies: Currency[];
    send: boolean;
    handleChange: (currency: Currency) => void;
}




export const CurrencyDropDownSelector: React.FC<CurrencyDropDownSelectorProps> = (
    {
        selectedCurrency,
        currencies,
        send,
        handleChange
    }
) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const onOptionClicked = (currency: Currency) => {
        handleChange(currency);
        setIsOpen(false);
    };

    return (
        <DropdownContainer>
            <DropdownHeader onClick={toggleDropdown} send={send}>
                {selectedCurrency ? (
                    <>
                        <OptionImage
                            src={getImageUrl(selectedCurrency.isoCode)}
                            alt={'*'}
                        />
                        {selectedCurrency.currency}
                    </>
                ) : (
                    'Select a currency'
                )}
            </DropdownHeader>
            {isOpen && (
                <DropdownListContainer>
                    <DropdownList>
                        {currencies.sort(sortCurrencies).map((curr) => (
                            <ListItem key={curr.id} onClick={() => onOptionClicked(curr)} send={send} >
                                <OptionImage
                                    src={getImageUrl(curr.isoCode)}
                                    alt={'*'}
                                />
                                {curr.currency}
                            </ListItem>
                        ))}
                    </DropdownList>
                </DropdownListContainer>
            )}
        </DropdownContainer>
    );
}
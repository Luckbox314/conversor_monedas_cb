import { Currency } from './types';

export const sortCurrencies = (a: Currency, b: Currency) => {
    if (a.popular && !b.popular) {
        return -1;
    } else if (b.popular && !a.popular) {
        return 1;
    }
    if (a.currency < b.currency) {
        return -1;
    }
    if (a.currency > b.currency) {
        return 1;
    }
    return 0;
}

export const getImageUrl = (isoCode: string) => {
    return `https://flagsapi.com/${isoCode}/flat/64.png`;
}
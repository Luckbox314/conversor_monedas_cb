export interface CurrencyRates {
    [key: string]: number;
}

export interface CurrencyResponse {
    date: string;
    [currencyCode:string]: CurrencyRates | string;
}
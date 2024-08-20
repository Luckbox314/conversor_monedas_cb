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

export const trimInsignificantDecimals = (amount: number) => {


    let strValue = amount.toString();
    if (strValue.includes("e")) {
        // Convert the number to a string without scientific notation
        strValue = amount.toFixed(20).replace(/\.?0+$/, "");
    }

    // Check if the amount is less than 1
    if (Math.abs(amount) < 1) {
        // Split the string by the decimal point
        let parts = strValue.split(".");
        if (parts.length < 2) {
            return amount; // No decimal part
        }

        // Get the decimal part
        let decimalPart = parts[1];

        // Find the first two non-zero digits after the decimal
        let significantDecimals = "";
        let significantCount = 0;
        for (let i = 0; i < decimalPart.length; i++) {
            significantDecimals += decimalPart[i];
            if (decimalPart[i] !== "0") {
                significantCount++;
                if (significantCount === 2) {
                    break;
                }
            }
        }

        // Combine the integer part and the significant decimals
        return Number(parts[0] + "." + significantDecimals);
    } else {
        // For values >= 1, round to two decimal places
        return Number(amount.toFixed(2));
    }
}
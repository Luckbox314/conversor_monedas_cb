import { ApiService } from './apiService';

const TRANSACTION_FEE = 0.95;

export class ConversionService {
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  async convertCurrency(fromCurrency: string, fromAmount: number, targetCurrency: string, targetAmount: number): Promise<number> {
    const rate = await this.apiService.getExchangeRate(fromCurrency, targetCurrency, new Date());
    if (fromAmount === 0) {
      return targetAmount / rate / TRANSACTION_FEE;
    } else if (targetAmount === 0) {
      return fromAmount * rate * TRANSACTION_FEE;
    };
    throw new Error('Either fromAmount or targetAmount must be 0');
  }
}
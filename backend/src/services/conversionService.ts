import { ApiService } from './apiService';

const TRANSACTION_FEE = 0.95;

export class ConversionService {
  private apiService: ApiService;
  public transactionFee: number;


  constructor(apiService?: ApiService) {
    this.apiService = apiService || new ApiService();
    this.transactionFee = TRANSACTION_FEE;
  }

  async convertCurrency(fromCurrency: string, fromAmount: number, targetCurrency: string, targetAmount: number): Promise<number> {
    const rate = await this.apiService.getExchangeRate(fromCurrency, targetCurrency, new Date());
    if (fromAmount === 0 && targetAmount === 0) {
      throw new Error('Only one of fromAmount or targetAmount must be 0');
    } else
    if (fromAmount === 0) {
      return targetAmount / rate / this.transactionFee;
    } else if (targetAmount === 0) {
      return fromAmount * rate * this.transactionFee;
    };
    throw new Error('Either fromAmount or targetAmount must be 0');
  }
}
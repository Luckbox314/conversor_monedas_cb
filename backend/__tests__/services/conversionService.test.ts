import { ConversionService , ApiService } from '../../src/services';

// Mock the ApiService
jest.mock('../../src/services/apiService');

describe('ConversionService', () => {
  let conversionService: ConversionService;
  let mockApiService: jest.Mocked<ApiService>;

  beforeEach(() => {
    mockApiService = new ApiService() as jest.Mocked<ApiService>;
    conversionService = new ConversionService(mockApiService);
    conversionService.transactionFee = 0.95;
  });

  test.each([
    { fromCurrency: 'usd', fromAmount: 100, targetCurrency: 'clp', targetAmount: 0 , rate: 1.2, expected: 100*1.2*0.95 },
    { fromCurrency: 'usd', fromAmount: 0, targetCurrency: 'clp', targetAmount: 100, rate: 200, expected: 100/200/0.95 },
    { fromCurrency: 'usd', fromAmount: 100, targetCurrency: 'clp', targetAmount: 0 , rate: 112, expected: 100*112*0.95 },
    { fromCurrency: 'clp', fromAmount: 0, targetCurrency: 'usd', targetAmount: 100, rate: 53, expected: 100/53/0.95 },
    { fromCurrency: 'clp', fromAmount: 100, targetCurrency: 'usd', targetAmount: 0 , rate: 0.00005, expected: 100*0.00005*0.95 },
    { fromCurrency: 'clp', fromAmount: 0, targetCurrency: 'ars', targetAmount: 100, rate: 2, expected: 100/2/0.95 },
    { fromCurrency: 'clp', fromAmount: 100, targetCurrency: 'ars', targetAmount: 0 , rate: 1.0230002, expected: 100*1.0230002*0.95 },
    { fromCurrency: 'ars', fromAmount: 0, targetCurrency: 'clp', targetAmount: 100, rate: 0.01, expected: 100/0.01/0.95 },
  ])(`should correctly convert currency`, async ({ fromCurrency, fromAmount, targetCurrency, targetAmount, rate, expected }) => {
    mockApiService.getExchangeRate.mockResolvedValue(rate); // Mock exchange rate

    const result = await conversionService.convertCurrency(fromCurrency, fromAmount, targetCurrency, targetAmount);
    expect(result.value).toBeCloseTo(expected, 5);
    if (fromCurrency === 'clp') {
      expect(result.exchangeRate).toBeCloseTo(1 / (rate * 0.95), 5);
    } else {
      expect(result.exchangeRate).toBeCloseTo(rate * 0.95, 5);
    }
  });

  it('should throw an error if both values are 0', async () => {
    mockApiService.getExchangeRate.mockResolvedValue(1.2); // Mock exchange rate

    await expect(conversionService.convertCurrency('CLP', 0, 'USD', 0)).rejects.toThrow('Both fromAmount and targetAmount cannot be 0 at the same time');
  });

  it('should throw an error if none of the values are 0', async () => {
    mockApiService.getExchangeRate.mockResolvedValue(1.2); // Mock exchange rate

    await expect(conversionService.convertCurrency('CLP', 100, 'USD', 100)).rejects.toThrow('Either fromAmount or targetAmount must be 0');
  });

  it('should throw an error if the API fails', async () => {
    mockApiService.getExchangeRate.mockRejectedValue(new Error('API Error'));

    await expect(conversionService.convertCurrency('CLP', 100, 'USD', 0)).rejects.toThrow('API Error');
  });
});

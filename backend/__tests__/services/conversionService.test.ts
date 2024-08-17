import { ConversionService , ApiService } from '../../src/services';

// Mock the ApiService
jest.mock('../src/services/apiService');

describe('ConversionService', () => {
  let conversionService: ConversionService;
  let mockApiService: jest.Mocked<ApiService>;

  beforeEach(() => {
    mockApiService = new ApiService() as jest.Mocked<ApiService>;
    conversionService = new ConversionService();
  });

  it('should correctly convert currency', async () => {
    mockApiService.getExchangeRate.mockResolvedValue(1.2); // Mock exchange rate

    const result = await conversionService.convertCurrency(100, 'USD', 'EUR');
    expect(result).toBe(120);
  });

  it('should throw an error if the API fails', async () => {
    mockApiService.getExchangeRate.mockRejectedValue(new Error('API Error'));

    await expect(conversionService.convertCurrency(100, 'USD', 'EUR')).rejects.toThrow('API Error');
  });
});

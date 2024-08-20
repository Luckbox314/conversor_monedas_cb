import { Request, Response } from 'express';
import { ConversionService } from '../services/conversionService';

export class ConversionController {
  private conversionService: ConversionService;

  constructor() {
    this.conversionService = new ConversionService();
  }

  async convert(req: Request, res: Response): Promise<void> {
    const { fromCurrency, fromAmount, targetCurrency, targetAmount } = req.query;
    try {
      const conversion = await this.conversionService.convertCurrency(
        fromCurrency as string,
        parseFloat(fromAmount as string),
        targetCurrency as string,
        parseFloat(targetAmount as string)
    );
      res.json(conversion);
    } catch (error) {
        if (error instanceof Error && error.message) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Unknown Error' });
        }
    }
  }
}

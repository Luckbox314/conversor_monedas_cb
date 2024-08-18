import { Request, Response, NextFunction } from 'express';

export function validateConversionQuery(req: Request, res: Response, next: NextFunction): void {
  const { fromCurrency, fromAmount, targetCurrency, targetAmount } = req.query;

  if (!fromCurrency || !targetCurrency || !targetAmount && !fromAmount) {
    res.status(400).json({ message: 'Missing query parameters' });
    return;
  }

  // check that fromCurrency and targetCurrency are 3 letter strings
  if (typeof fromCurrency !== 'string' || fromCurrency.length !== 3) {
    res.status(400).json({ message: 'Invalid fromCurrency' });
    return;
  } else if (typeof targetCurrency !== 'string' || targetCurrency.length !== 3) {
    res.status(400).json({ message: 'Invalid targetCurrency' });
    return;
  }


  const parsedFromAmount = parseFloat(req.query.fromAmount as string);
  const parsedTargetAmount = parseFloat(req.query.targetAmount as string);
  if (isNaN(parsedFromAmount)) {
    res.status(400).json({ message: 'Invalid fromAmount' });
    return;
  } else if (isNaN(parsedTargetAmount)) {
    res.status(400).json({ message: 'Invalid targetAmount' });
    return;
  }
  next();
}
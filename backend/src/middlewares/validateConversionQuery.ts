import { Request, Response, NextFunction } from 'express';

export function validateConversionQuery(req: Request, res: Response, next: NextFunction): void {
  const { fromCurrency, fromAmount, targetCurrency, targetAmount } = req.query;
  if (!fromCurrency || !targetCurrency || !targetAmount && !fromAmount) {
    res.status(400).json({ message: 'Missing query parameters' });
    return;
  }

  if (!fromAmount && targetAmount) {
    req.query.fromAmount = '0';
  }
  else if (!targetAmount && fromAmount) {
    req.query.targetAmount = '0';
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
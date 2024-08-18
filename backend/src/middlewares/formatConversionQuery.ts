import { Request, Response, NextFunction } from 'express';

export function formatConversionQuery(req: Request, res: Response, next: NextFunction): void {

    if (!req.query.fromAmount && req.query.fromAmount) {
        req.query.fromAmount = '0';
    }
    else if (!req.query.targetAmount && req.query.fromAmount) {
        req.query.targetAmount = '0';
    }
    req.query.fromCurrency = (req.query.fromCurrency as string).toLowerCase();
    req.query.targetCurrency = (req.query.targetCurrency as string).toLowerCase();

    next();
}
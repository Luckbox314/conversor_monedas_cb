import { Router } from 'express';
import { ConversionController } from '../controllers';
import { validateConversionQuery } from '../middlewares';

const router = Router();
const conversionController = new ConversionController();

router.use(validateConversionQuery);

router.get('/convert',  conversionController.convert.bind(conversionController));

export default router;
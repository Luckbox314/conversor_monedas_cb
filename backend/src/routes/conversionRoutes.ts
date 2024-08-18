import { Router } from 'express';
import { ConversionController } from '../controllers';
import { validateConversionQuery, formatConversionQuery } from '../middlewares';

const router = Router();
const conversionController = new ConversionController();

router.use(validateConversionQuery);
router.use(formatConversionQuery);

router.get('/convert',  conversionController.convert.bind(conversionController));

export default router;
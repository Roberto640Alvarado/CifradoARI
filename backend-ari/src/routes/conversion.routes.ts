import { Router } from 'express';
import conversionController from '../controllers/conversion.controllers';

const router = Router();

router.post('/text-to-json', conversionController.convertTextToJson);
router.post('/json-to-text', conversionController.convertJsonToText);

export default router;

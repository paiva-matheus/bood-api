import * as PropertiesController from '@/properties/property.controller';
import { Router } from 'express';

const router = Router();

router.get('/', PropertiesController.findAllProperties);
router.get('/:id', PropertiesController.findProperty);

export default router;

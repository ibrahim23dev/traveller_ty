// src/routes/auth.route.ts
import { Router } from 'express';
import authController from '../controllers/auth.controller';
import validate from '../middleware/validate.middleware';
import { authValidation } from '../validations/auth.validation';

const router = Router();

router.post('/signup', validate(authValidation.signup), authController.signup);
router.post('/signin', validate(authValidation.signin), authController.signin);

export default router;

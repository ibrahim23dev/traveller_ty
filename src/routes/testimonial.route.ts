// src/routes/testimonial.route.ts
import { Router } from 'express';
import testimonialController from '../controllers/testimonial.controller';
import validate from '../middleware/validate.middleware';
import { testimonialValidation } from '../validations/testimonial.validation';
import auth from '../middleware/auth.middleware';

const router = Router();

router.post(
  '/',
  auth,
  validate(testimonialValidation.create),
  testimonialController.createTestimonial
);
router.get('/', testimonialController.getTestimonials);
router.get('/:id', testimonialController.getTestimonial);
router.put(
  '/:id',
  auth,
  validate(testimonialValidation.update),
  testimonialController.updateTestimonial
);
router.delete('/:id', auth, testimonialController.deleteTestimonial);

export default router;

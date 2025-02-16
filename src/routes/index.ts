// src/routes/index.ts
import { Router } from 'express';
import portfolioRoutes from './portfolio.route';
import testimonialRoutes from './testimonial.route';
import productRoutes from './product.route';
import authRoutes from './auth.route';

const router = Router();

router.use('/portfolio', portfolioRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/products', productRoutes);
router.use('/auth', authRoutes);

export default router;

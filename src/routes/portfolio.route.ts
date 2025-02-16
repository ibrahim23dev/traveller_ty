// src/routes/portfolio.route.ts
import { Router } from 'express';
import portfolioController from '../controllers/portfolio.controller';
import validate from '../middleware/validate.middleware';
import { portfolioValidation } from '../validations/portfolio.validation';
import auth from '../middleware/auth.middleware';

const router = Router();

router.post(
  '/',
  auth,
  validate(portfolioValidation.create),
  portfolioController.createPortfolio
);
router.get('/', portfolioController.getPortfolios);
router.get('/:id', portfolioController.getPortfolio);
router.put(
  '/:id',
  auth,
  validate(portfolioValidation.update),
  portfolioController.updatePortfolio
);
router.delete('/:id', auth, portfolioController.deletePortfolio);

export default router;

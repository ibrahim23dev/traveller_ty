// src/routes/product.route.ts
import { Router } from 'express';
import productController from '../controllers/product.controller';
import validate from '../middleware/validate.middleware';
import { productValidation } from '../validations/product.validation';
import auth from '../middleware/auth.middleware';

const router = Router();

router.post(
  '/',
  auth,
  validate(productValidation.create),
  productController.createProduct
);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.put(
  '/:id',
  auth,
  validate(productValidation.update),
  productController.updateProduct
);
router.delete('/:id', auth, productController.deleteProduct);

export default router;

// src/controllers/product.controller.ts
import { Request, Response, NextFunction } from 'express';
import productService from '../services/product.service';

class ProductController {
  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }

  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productService.getProducts();
      res.json(products);
    } catch (error) {
      next(error);
    }
  }

  async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productService.getProductById(req.params.id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedProduct = await productService.updateProduct(
        req.params.id,
        req.body
      );
      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      await productService.deleteProduct(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductController();

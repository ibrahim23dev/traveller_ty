// src/services/product.service.ts
import Product, { ProductDocument } from '../models/product.model';

class ProductService {
  async createProduct(
    data: Partial<ProductDocument>
  ): Promise<ProductDocument> {
    const product = new Product(data);
    return product.save();
  }

  async getProducts(): Promise<ProductDocument[]> {
    return Product.find();
  }

  async getProductById(id: string): Promise<ProductDocument | null> {
    return Product.findById(id);
  }

  async updateProduct(
    id: string,
    data: Partial<ProductDocument>
  ): Promise<ProductDocument | null> {
    return Product.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProduct(id: string): Promise<void> {
    await Product.findByIdAndDelete(id);
  }
}

export default new ProductService();

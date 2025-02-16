// src/models/product.model.ts
import { Schema, model, Document } from 'mongoose';
import { IProduct } from '../interfaces/product.interface';

export interface ProductDocument extends IProduct, Document {}

const productSchema = new Schema<ProductDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<ProductDocument>('Product', productSchema);

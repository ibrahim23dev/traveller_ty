// src/models/portfolio.model.ts
import { Schema, model, Document } from 'mongoose';
import { IPortfolio } from '../interfaces/portfolio.interface';

export interface PortfolioDocument extends IPortfolio, Document {}

const portfolioSchema = new Schema<PortfolioDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<PortfolioDocument>('Portfolio', portfolioSchema);

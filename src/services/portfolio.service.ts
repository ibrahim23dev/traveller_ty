// src/services/portfolio.service.ts
import Portfolio, { PortfolioDocument } from '../models/portfolio.model';

class PortfolioService {
  async createPortfolio(
    data: Partial<PortfolioDocument>
  ): Promise<PortfolioDocument> {
    const portfolio = new Portfolio(data);
    return portfolio.save();
  }

  async getPortfolios(): Promise<PortfolioDocument[]> {
    return Portfolio.find();
  }

  async getPortfolioById(id: string): Promise<PortfolioDocument | null> {
    return Portfolio.findById(id);
  }

  async updatePortfolio(
    id: string,
    data: Partial<PortfolioDocument>
  ): Promise<PortfolioDocument | null> {
    return Portfolio.findByIdAndUpdate(id, data, { new: true });
  }

  async deletePortfolio(id: string): Promise<void> {
    await Portfolio.findByIdAndDelete(id);
  }
}

export default new PortfolioService();

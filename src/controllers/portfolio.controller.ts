// src/controllers/portfolio.controller.ts
import { Request, Response, NextFunction } from 'express';
import portfolioService from '../services/portfolio.service';

class PortfolioController {
  async createPortfolio(req: Request, res: Response, next: NextFunction) {
    try {
      const portfolio = await portfolioService.createPortfolio(req.body);
      res.status(201).json(portfolio);
    } catch (error) {
      next(error);
    }
  }

  async getPortfolios(req: Request, res: Response, next: NextFunction) {
    try {
      const portfolios = await portfolioService.getPortfolios();
      res.json(portfolios);
    } catch (error) {
      next(error);
    }
  }

  async getPortfolio(req: Request, res: Response, next: NextFunction) {
    try {
      const portfolio = await portfolioService.getPortfolioById(req.params.id);
      res.json(portfolio);
    } catch (error) {
      next(error);
    }
  }

  async updatePortfolio(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedPortfolio = await portfolioService.updatePortfolio(
        req.params.id,
        req.body
      );
      res.json(updatedPortfolio);
    } catch (error) {
      next(error);
    }
  }

  async deletePortfolio(req: Request, res: Response, next: NextFunction) {
    try {
      await portfolioService.deletePortfolio(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new PortfolioController();

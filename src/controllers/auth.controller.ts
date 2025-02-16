// src/controllers/auth.controller.ts
import { Request, Response, NextFunction } from 'express';
import authService from '../services/auth.service';

class AuthController {
  async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await authService.signup(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async signin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = await authService.signin(req.body);
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();

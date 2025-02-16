// src/controllers/testimonial.controller.ts
import { Request, Response, NextFunction } from 'express';
import testimonialService from '../services/testimonial.service';

class TestimonialController {
  async createTestimonial(req: Request, res: Response, next: NextFunction) {
    try {
      const testimonial = await testimonialService.createTestimonial(req.body);
      res.status(201).json(testimonial);
    } catch (error) {
      next(error);
    }
  }

  async getTestimonials(req: Request, res: Response, next: NextFunction) {
    try {
      const testimonials = await testimonialService.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      next(error);
    }
  }

  async getTestimonial(req: Request, res: Response, next: NextFunction) {
    try {
      const testimonial = await testimonialService.getTestimonialById(
        req.params.id
      );
      res.json(testimonial);
    } catch (error) {
      next(error);
    }
  }

  async updateTestimonial(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedTestimonial = await testimonialService.updateTestimonial(
        req.params.id,
        req.body
      );
      res.json(updatedTestimonial);
    } catch (error) {
      next(error);
    }
  }

  async deleteTestimonial(req: Request, res: Response, next: NextFunction) {
    try {
      await testimonialService.deleteTestimonial(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new TestimonialController();

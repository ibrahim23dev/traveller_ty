import { Request, Response, NextFunction } from 'express';
import { AnySchema } from 'joi';
import ApiError from '../utils/apiError';

export default (schema: AnySchema) => 
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const message = error.details.map(detail => detail.message).join(', ');
      next(new ApiError(400, message));
      return;
    }
    next();
  };
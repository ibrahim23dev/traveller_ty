// src/middleware/validate.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

const validate = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      // Call the response method without returning its value
      res.status(400).json({
        message: error.details.map(detail => detail.message).join(', ')
      });
      return; // Ensure the function returns void
    }
    next();
  };
};

export default validate;

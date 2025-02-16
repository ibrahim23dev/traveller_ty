// src/validations/testimonial.validation.ts
import Joi from 'joi';

const create = Joi.object({
  author: Joi.string().required(),
  content: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
});

const update = Joi.object({
  author: Joi.string(),
  content: Joi.string(),
  rating: Joi.number().min(1).max(5),
});

export const testimonialValidation = { create, update };

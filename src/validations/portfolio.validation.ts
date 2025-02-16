// src/validations/portfolio.validation.ts
import Joi from 'joi';

const create = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().uri().required(),
});

const update = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  image: Joi.string().uri(),
});

export const portfolioValidation = { create, update };

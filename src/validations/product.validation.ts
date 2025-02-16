// src/validations/product.validation.ts
import Joi from 'joi';

const create = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().uri().required(),
});

const update = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  image: Joi.string().uri(),
});

export const productValidation = { create, update };

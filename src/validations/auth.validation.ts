// src/validations/auth.validation.ts
import Joi from 'joi';

const signup = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const signin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const authValidation = { signup, signin };

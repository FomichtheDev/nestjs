import * as Joi from '@hapi/joi';

export const envValidationSchema = Joi.object({
  DB_USER: Joi.required(),
  DB_PASSWORD: Joi.required(),
  DB_NAME: Joi.required(),
  DB_PORT: Joi.number().default(5432),
  DB_HOST: Joi.required(),
});

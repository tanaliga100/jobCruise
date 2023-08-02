import Joi from "joi";

export const testShema = Joi.object().keys({
  username: Joi.string().required().min(3).max(10),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  birth_year: Joi.number().integer().min(1900).max(2023),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});

export const jobBodySchema = Joi.object().keys({
  company: Joi.string().required().max(50).min(3),
  position: Joi.string().required().max(50).min(3),
  jobStatus: Joi.array().items(Joi.string()),
  jobType: Joi.array().items(Joi.string()),
  jobLocation: Joi.string(),
});

export const jobIdSchema = Joi.object({
  id: Joi.string().alphanum().length(24).required(),
});

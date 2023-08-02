import Joi from "joi";

const testSCHEMA = Joi.object().keys({
  username: Joi.string().required().min(3).max(10),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  birth_year: Joi.number().integer().min(1900).max(2023),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});

export default testSCHEMA;

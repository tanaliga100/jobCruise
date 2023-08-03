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

export const userInputSchema = Joi.object().keys({
  firstName: Joi.string().min(3).max(20).required().label("First Name"),
  lastName: Joi.string().min(3).max(20).required().label("Last Name"),
  age: Joi.number().required().label("Age"),
  gender: Joi.string().required().label("Gender"),
  DOB: Joi.date().greater(new Date("1900-01-01")).required().label("DOB"),
  phoneNumber: Joi.number().required().label("Phone Number"),
  email: Joi.string().email().required().label("Email"),
  password: Joi.string().alphanum().min(6).required().label("Password"),
  address: Joi.object().keys({
    addressLine: Joi.string().required().label("Address Line"),
    state: Joi.string().required().label("State"),
    country: Joi.string().required().label("Country"),
    zipCode: Joi.string().default("1116").label("Zip Code"),
  }),
  role: Joi.string().valid("Admin", "User").label("Role"),
});

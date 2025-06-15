const Joi = require("joi");

const signUpSchema = Joi.object({
    username: Joi.string()
        .min(3)
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9]+$")),
    email: Joi.string()
        .min(6)
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
    password: Joi.string()
        .min(6)
        .required()
});

const signInSchema = Joi.object({
    email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
    password: Joi.string()
        .min(6)
        .required()
});

module.exports = { 
    signUpSchema,
    signInSchema, 
};
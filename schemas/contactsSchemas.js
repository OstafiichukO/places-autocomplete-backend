import Joi from 'joi';

export const createContactSchema = Joi.object({
    arabicName: Joi.string().required().min(1),
    englishName: Joi.string().required().min(1),
});

export const updateContactSchema = Joi.object({
    arabicName: Joi.string(),
    englishName: Joi.string(),
})
    .min(1)
    .messages({
        'object.min': 'Body must have at least one field',
    });

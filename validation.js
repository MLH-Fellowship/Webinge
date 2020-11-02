const Joi = require("@hapi/joi");


const recommendationsValidation = (data) => {
    const schema = Joi.object({
        titlesFromUser: Joi.array().items(Joi.string())
    })
    // Validate data received from request
    return schema.validate(data)
}

module.exports.recommendationsValidation = recommendationsValidation;
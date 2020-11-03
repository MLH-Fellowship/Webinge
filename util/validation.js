const Joi = require("@hapi/joi");


const recommendationsValidation = (data) => {
    const schema = Joi.object({
        movieTitles: Joi.array().items(Joi.string()).required()
    })
    // Validate data received from request
    return schema.validate(data)
}

module.exports.recommendationsValidation = recommendationsValidation;
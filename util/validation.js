const Joi = require("@hapi/joi");


const recommendationsValidation = (data) => {
    const schema = Joi.object({
        movieTitles: Joi.array().items(Joi.string()).required()
    })
    // Validate data received from request
    return schema.validate(data)
}


const revenuePredictionValidation = (data) => {
    const schema = Joi.object({
        budget: Joi.number().required(),
        genre_id: Joi.number().required(),
        runtime: Joi.number().required()
    })
    // Validate data received from request
    return schema.validate(data)
}

module.exports.recommendationsValidation = recommendationsValidation;
module.exports.revenuePredictionValidation = revenuePredictionValidation;
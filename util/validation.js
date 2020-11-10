const Joi = require("@hapi/joi");

const recommendationsValidation = (data) => {
  const schema = Joi.object({
    movieTitles: Joi.array().items(Joi.string()).required(),
  });
  // Validate data received from request
  return schema.validate(data);
};

const recommendationsValidationV2 = (data) => {
  const schema = Joi.object({
    movies: Joi.array()
      .items(
        Joi.object({
          title: Joi.string().required(),
          releaseYear: Joi.string().required()
        })
      )
      .required(),
  });
  // Validate data received from request
  return schema.validate(data);
};

const revenuePredictionValidation = (data) => {
  const schema = Joi.object({
    budget: Joi.number().required(),
    genre_id: Joi.number().required(),
    runtime: Joi.number().required(),
  });
  // Validate data received from request
  return schema.validate(data);
};

//for video games
const revenuePredictionValidation_VG = (data) => {
  const schema = Joi.object({
    platform_id: Joi.number().required(),
    genre_id: Joi.number().required(),
  });
  // Validate data received from request
  return schema.validate(data);
};

module.exports.recommendationsValidation = recommendationsValidation;
module.exports.recommendationsValidationV2 = recommendationsValidationV2;
module.exports.revenuePredictionValidation = revenuePredictionValidation;
module.exports.revenuePredictionValidation_VG = revenuePredictionValidation_VG;

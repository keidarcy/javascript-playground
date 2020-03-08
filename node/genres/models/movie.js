const mongoose = require('mongoose');
const Joi = require('joi');
const { genreSchema } = require('./genre');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 0,
    maxlength: 255,
    required: true,
  },
  numberInStock: {
    type: Number,
    min: 0,
    max: 255,
    required: true,
  },
  dailyRentalRate: {
    type: Number,
    min: 0,
    max: 255,
    required: true,
  },
  genre: {
    type: genreSchema,
    required: true,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

const validateMovie = movie => {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number()
      .min(0)
      .max(255)
      .required(),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(255)
      .required(),
  };
  return Joi.validate(movie, schema);
};
module.exports.validate = validateMovie;
module.exports.Movie = Movie;

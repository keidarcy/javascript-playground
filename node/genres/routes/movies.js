const express = require('express');
const { Movie, validate } = require('../models/movie');
const { Genre } = require('../models/genre');

const router = express.Router();
router.post('/', async (request, response) => {
  const { error } = validate(request.body);
  if (error) return response.status(400).send(error.detail[0].message);

  const genre = await Genre.findById(request.body.genreId);
  if (!genre) return response.status(400).send('Invalid genre');
  const movie = new Movie({
    title: request.body.title,
    numberInStock: request.body.numberInStock,
    dailyRentalRate: request.body.dailyRentalRate,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
  });
  movie.save();
  return response.send(movie);
});

module.exports = router;

const Fawn = require('fawn');
const express = require('express');
const mongoose = require('mongoose');
const { Rental, validate } = require('../models/rental');
const { Movie } = require('../models/movie');
const { Customer } = require('../models/customer');

Fawn.init(mongoose);
const router = express.Router();

router.get('/', async (request, response) => {
  const rentals = await Rental.find().sort('-dateOut');
  response.send(rentals);
});

router.post('/', async (request, response) => {
  const { error } = validate(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  const customer = Customer.findById(request.body.customerId);

  if (!customer) return response.status(400).send(error.details[0].message);

  const movie = Movie.findById(request.body.movieId);
  if (!movie) return response.status(400).send(error.details[0].message);

  let rental = new Rental({
    customer: {
      _id: customer._id,
      name: customer.name,
      phone: customer.phone,
    },
    movie: {
      _id: movie._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate,
    },
  });
  // rental = await rental.save();
  // movie.numberInStock -= 1;
  // movie.save();
  try {
    new Fawn.Task()
      .save('rentals', rental)
      .update(
        'movies',
        { _id: movie._id },
        {
          $inc: { numberInStock: -1 },
        },
      )
      .run();
  } catch (ex) {
    return response.status(500).send('errroorr');
  }
  return response.send(rental);
});

module.exports = router;

const mongoose = require('mongoose');
const Joi = require('joi');

const rentalSchema = new mongoose.Schema({
  customer: new mongoose.Schema({
    name: {
      required: true,
      minlength: 2,
      maxlength: 10,
      type: String,
    },
    isGold: {
      type: Boolean,
      required: true,
    },
    phone: {
      required: true,
      minlength: 2,
      maxlength: 255,
      type: String,
    },
  }),
  movie: new mongoose.Schema({
    title: {
      type: String,
      minlength: 5,
      maxlength: 255,
      required: true,
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      min: 0,
      max: 255,
    },
    // required: true,
  }),
  dateOut: {
    type: Date,
    required: true,
    default: Date.now,
  },
  dateReturn: {
    type: Date,
  },
  retalFee: {
    type: Number,
    min: 0,
  },
});

const Rental = mongoose.model('Rental', rentalSchema);

const validateRental = async rental => {
  const schema = {
    customerId: Joi.objectId().required(),
    movieId: Joi.objectIdj().required(),
  };

  return Joi.validate(rental, schema);
};

exports.validate = validateRental;
exports.Rental = Rental;

const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model(
  'Customer',
  new mongoose.Schema({
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
);

const validateCustomer = customer => {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(10)
      .required(),
    phone: Joi.string()
      .min(2)
      .max(255)
      .required(),
    isGold: Joi.boolean(),
  };
  return Joi.validate(customer, schema);
};
// module.exports = Customer;
// module.exports.Customer = Customer;
exports.Customer = Customer;

exports.validate = validateCustomer;

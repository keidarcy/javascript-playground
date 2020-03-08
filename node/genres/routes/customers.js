const express = require('express');
const { Customer, validate } = require('../models/customer');

const router = express.Router();

router.get('/', async (request, response) => {
  const customers = await Customer.find().sort('name');
  return response.send(customers);
});

router.post('/', (request, response) => {
  const { error } = validate(request.body);
  if (error) return response.status(400).send(error.details[0].message);
  const customer = new Customer({
    name: request.body.name,
    isGold: request.body.isGold,
    phone: request.body.phone,
  });
  customer.save();
  return response.send(customer);
});
module.exports = router;

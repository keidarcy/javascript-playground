// const mongoose = require('mongoose');
const _ = require('lodash');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const { User, validate } = require('../models/user');

const router = express.Router();
router.get('/', async (request, response) => {
  const user = await User.find().sort('name');
  response.send(user);
});

router.post('/', async (request, response) => {
  const { error } = validate(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: request.body.email });
  if (user) return response.status(400).send('User already registered');

  user = new User(_.pick(request.body, ['name', 'email', 'password']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();

  return response
    .header('x-auth-token', token)
    .send(_.pick(user, ['_id', 'name', 'email']));
});

module.exports = router;

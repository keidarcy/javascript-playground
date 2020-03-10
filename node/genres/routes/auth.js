// const mongoose = require('mongoose');
const _ = require('lodash');
const config = require('config');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { User } = require('../models/user');

const router = express.Router();

const validate = request => {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
  };
  return Joi.validate(request, schema);
};

router.get('/', async (request, response) => {
  const user = await User.find().sort('name');
  response.send(user);
});

router.post('/', async (request, response) => {
  const { error } = validate(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: request.body.email });
  if (!user) return response.status(400).send('1 invalid email or password');

  const validPassword = await bcrypt.compare(
    request.body.password,
    user.password,
  );
  if (!validPassword)
    return response.status(400).send('2 invalid email or password');

  const token = jwt.sign({ _id: user._id }, config.get('jwtPrivateKey'));

  return response.send(token);
  // user = new User(_.pick(request.body, ['name', 'email', 'password']));
  // const salt = await bcrypt.genSalt(10);
  // user.password = await bcrypt.hash(user.password, salt);

  // await user.save();
  // return response.send(_.pick(user, ['_id', 'name', 'email']));
});

module.exports = router;

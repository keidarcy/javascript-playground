// const Joi = require('joi');
const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const genres = require('./routes/genres.js');
const customers = require('./routes/customers.js');
const rentals = require('./routes/rentals.js');
const movies = require('./routes/movies.js');

const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect('mongodb://localhost/vidly')
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log(err.message));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

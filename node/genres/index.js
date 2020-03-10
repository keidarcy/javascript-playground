// const Joi = require('joi');
const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
const { dd } = require('dumper.js');
Joi.objectId = require('joi-objectid')(Joi);
const genres = require('./routes/genres.js');
const customers = require('./routes/customers.js');
const rentals = require('./routes/rentals.js');
const movies = require('./routes/movies.js');
const users = require('./routes/users.js');
const auth = require('./routes/auth.js');

// dd(config.get('jwtPrivateKey'));
console.log(config.get('jwtPrivateKey'));
if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR!');
  process.exit(1);
}

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
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

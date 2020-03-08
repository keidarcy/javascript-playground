//process.env.NODE_ENV = 'production';
const express = require('express');
const config = require('config');
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const app = express();

const courses = require('./routes/courses');
const home = require('./routes/home');
app.set('view engine', 'pug');
// app.set('view', './views');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));
app.use('/api/courses', courses);
app.use('/', home);

startupDebugger('Morgan enabled ...');
dbDebugger('database enabled ...');

console.log('Application name : ' + config.get('name'));
console.log('mail server : ' + config.get('mail.host'));
console.log(process.env.NODE_ENV);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app.get('env') : ${app.get('env')}`);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));

const express = require('express');
const { Genre, validate } = require('../models/genre');

const router = express.Router();

router.get('/', async (request, response) => {
  const genres = await Genre.find().sort('name');
  response.send(genres);
});

router.post('/', async (request, response) => {
  const { error } = validate(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  let genre = new Genre({ name: request.body.name });
  genre = await genre.save();
  return response.send(genre);
});

router.put('/:id', async (request, response) => {
  // const genre = await Genre.find(Number(request.params.id))

  const { error } = validate(request.body);
  if (error) return response.status(400).send(error.details[0].message);
  const genre = await Genre.findByIdAndUpdate(
    request.params.id,
    { name: request.body.name },
    { new: true },
  );

  if (!genre)
    return response
      .status(404)
      .send('The genre with the given ID was not found.');

  return response.send(genre);
});

router.delete('/:id', async (request, response) => {
  const genre = await Genre.findByIdAndRemove(request.params.id);
  // const genre = genres.find(c => Object.is(c.id, Number(request.params.id)));
  if (!genre) return response.status(404).send('Not Found ID');
  // genres.splice(genres.indexOf(request.params.id), 1);
  // const filteredGenres = genres.filter(
  //   item => !Object.is(item.id, Number(request.params.id)),
  // );
  return response.send(genre);
});

router.get('/:id', async (request, response) => {
  // const genre = genres.find(c => Object.is(c.id, Number(request.params.id)));
  const genre = await Genre.findById(request.params.id);
  if (!genre) return response.status(404).send('Not Found ID');
  return response.send(genre);
});

module.exports = router;

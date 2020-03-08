const express = require('express');
const router = express.Router();

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
  { id: 4, name: 'course4' }
];
router.get('/', (request, response) => {
  response.send(courses);
});

router.get('/:id', (req, res) => {
  const course = courses.find(c => Object.is(c.id, parseInt(req.params.id)));
  if (!course) res.status(404).send('the course with given id was not found');
  res.send(course);
});

router.post('/', (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) {
    //400 Bad Request
    res.status(400).send(error.details[0].message);
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

router.put('/:id', (req, res) => {
  // Look up exist courses if not return 404
  // validate if fail return 400
  // update course return updated course
  const course = courses.find(c => Object.is(parseInt(req.params.id), c.id));
  const { error } = validateCourse(req.body);
  if (!course) {
    res.status(404).send('not found your course');
  } else if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    course.name = req.body.name;
    res.send(course);
  }
  console.log(1);
});

router.delete('/:id', (req, res) => {
  console.log(1);
  const course = courses.find(c => Object.is(parseInt(req.params.id), c.id));
  if (!course) {
    res.status(404).send('not found your course');
  } else {
    const index = courses.indexOf(course);
    console.log(index);
    courses.splice(index, 1);
    res.send(courses);
  }
});

function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(course, schema);
}
module.exports = router;

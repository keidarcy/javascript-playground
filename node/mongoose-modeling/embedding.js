const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});
const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model(
  'Course',
  new mongoose.Schema({
    name: String,
    authors: [authorSchema]
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find()
    .populate('author', 'name -_id')
    .populate('category', 'name')
    .select('name author');
  console.log(courses);
}
// createAuthor('Mosh', 'My bio', 'My Website');

// createCourse('Node Course', '5e64290ef3d921642fb1c866');

async function updateAuthor(courseId) {
  const course = await Course.update(
    { _id: courseId },
    {
      $unset: {
        author: ''
      }
    }
  );
}
async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}
async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}
// createCourse('Nodejs', [
//   new Author({ name: 'Park' }),
//   new Author({ name: 'Una' }),
//   new Author({ name: 'Yum' })
// ]);
// listCourses();
// addAuthor('5e64369308cc1b79c5a1bcf5', new Author({ name: 'monri' }));
// updateAuthor('5e64310e20823f7223bddd88');

removeAuthor('5e64369308cc1b79c5a1bcf5', '5e64369308cc1b79c5a1bcf3');

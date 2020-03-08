const mongoose = require('mongoose');
//const cypress = require('cypress')
mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDb'));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});
const Course = mongoose.model('Course', courseSchema);
// async function createCourse() {
//   const course = new Course({
//     name: 'React',
//     author: 'May',
//     tags: ['react', 'frontend'],
//     isPublished: true
//   });
//   const result = course.save();
//   console.log(result);
// }
// createCourse();
async function getCourse() {
  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // gte (greater than or equal to)
  // lt (less than)
  // lte (less than or equal)
  // in
  // nin (not in)
  //   const courses = await Course.find({ isPublished: true })
  //     .limit(10)
  //     .sort({ name: -1 })
  //     .select({ name: 1, tags: 1 });
  const courses = await Course
    // .find({price: {$gt:10, $lte: 20}})
    // .find({ price: { $in: [10, 15, 20] } })
    // .limit(10);
    // .find()
    // .or([{ author: 'John' }, { isPublish: true }]);
    // .and([{ author: 'John' }, { isPublish: true }]);
    // .find({ author: /^John/ });
    // .find({ author: /May$/ });
    .find({ author: /.*Jo.*/ })
    .count();

  // .skip()

  console.log(courses);
}
getCourse();

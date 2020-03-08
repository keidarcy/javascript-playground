const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('connected to MongoDB'))
  .catch(err => console.log(err));

// const Course = mongoose.Schema({
//   tags: [String],
//   name: String,
//   author: String,
//   isPublished: Boolean,
//   date: { type: Date, default: Date.now() }
// });
// const course = mongoose.model('course', Course);

const Course = mongoose.model(
  'course',
  new mongoose.Schema({
    tags: {
      type: Array,
      validate: {
        isAsync: true,
        validator: function(v, callback) {
          setTimeout(() => {
            const result = v && v.length > 0;
            callback(result);
          }, 4000);
        },
        message: 'A course should have at least one tag'
      }
      // validate: () =>
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255
      // match: /pattern/
    },
    category: {
      type: String,
      enum: ['web', 'mobile', 'network'],
      required: true,
      lowercase: true
      // uppercase:true,
      // trim:true
    },
    author: String,
    isPublished: Boolean,
    date: { type: Date, default: Date.now() },
    price: {
      type: Number,
      required: function() {
        return this.isPublished;
      },
      min: 10,
      max: 90,
      get: v => Math.round(v),
      set: v => Math.round(v)
    }
  })
);

async function createCourse() {
  const course = new Course({
    name: 'Vue',
    author: 'evan',
    tags: ['game'],
    isPublished: true,
    price: 17.8,
    category: 'Web'
  });
  try {
    const create = await course.save();
    console.log(create);
  } catch (err) {
    for (field in err.errors) console.log(err.errors[field].message);
    // console.log('error in create : ', err.message);
  }
}

// async function getCourses() {
//   return await course
//     // .find({ isPublished: true, tags: { $in: ['frontend', 'backend'] } })

//     // .find({ isPublished: true })
//     // .or([{ tags: 'frontend' }, { tags: 'backend' }])
//     // .sort({ price: -1 })
//     .or([{ price: { $lte: 15 } }, { name: /.*by.*/ }])
//     .select('name author price');
// }

// async function updateCourse(id) {
//   const update = await course.findByIdAndUpdate(
//     id,
//     {
//       $set: {
//         author: 'Jane',
//         isPublished: false
//       }
//     },
//     { new: true }
//   );
//   if (!myCourse) return;
//   myCourse.isPublished = true;
//   myCourse.author = 'another one';

//   myCourse.set({
//     isPublished: true,
//     author: 'another one'
//   });

//   await myCourse.save();
// }

// async function removeCourse(id) {
//   const result = await course.deleteOne({ _id: id });
// }
// removeCourse('5a68fde3f09ad7646ddec17e');
// updateCourse('5e57abc4f5f58e56a54ef470');
(async function findCourse() {
  const course = await Course.find({ _id: '5e5cd374deb0e44665e5f422' });
  console.log(course[0].price);
  console.log(course);
})();
// createCourse();

const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model('Kitten', kittySchema);

const kitten = new Kitten({ name: 'fluffy' });

(async () => {
  const cat1 = await kitten.save();
  console.log({ cat1 });
  const cat2 = await Kitten.create({ name: 'kate' });
  console.log({ cat2 });
  const cat3 = await Kitten.insertMany([{ name: 'jane' }]);
  console.log({ cat3 });
  // const data = await Kitten.deleteMany({ name: 'kate' });
  // console.log('data:', data);
})();

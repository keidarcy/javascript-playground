const mongoose = require('mongoose');

const id = new mongoose.Types.ObjectId();
console.log(id.getTimestamp());
console.log(id);

const isValid = mongoose.Types.ObjectId.isValid('5e6485da7b0b8e4d923fe302');
console.log(isValid);

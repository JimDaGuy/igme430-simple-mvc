const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  createdData: {
    type: Date,
    default: Date.now,
  },

});

DogSchema.statics.addOne = (name, callback) => {
  const updateCriteria = {
    name,
  };

  // Increase age by 1
  return DogModel.update(updateCriteria, { $inc: { age: 1 } }, callback);
};

DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;

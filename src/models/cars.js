const mongoose = require('mongoose');

const manageCarSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  modelYear: {
    type: Number,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

// Creating a Manage Car Model
const Car = mongoose.model('Car', manageCarSchema);

module.exports = Car;

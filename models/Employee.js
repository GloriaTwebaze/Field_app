const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: "please input firstname",
  },
  lastname: {
    type: String,
    required: "please input lastname",
  },
  date: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  pastincidences: {
    type: String,
    required: true,
  }
});
// exporting modules
module.exports = mongoose.model('Employee', employeeSchema);
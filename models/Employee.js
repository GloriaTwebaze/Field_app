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
    required: "please enter your date of birth ",
  },
  gender: {
    type: String,
    required: "please input your gender",
  },
  role: {
    type: String,
    required: "please input user's role",
  },
  pastincidences: {
    type: String,
    required: true,
  }
});
// exporting modules
module.exports = mongoose.model('Employee', employeeSchema);
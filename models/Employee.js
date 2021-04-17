const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose')

const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  nin: {
    type: String,
    required: true,
  },
  drivinglicenseNo: {
    type: Number,
    required: true,
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
  },
  imageupload: {
    type: String,
    required: true,
  }
});




// employee.plugin(passportLocalMongoose);
// const employee = mongoose.model('userInfo', employee, 'userInfo');


// exporting modules
module.exports = mongoose.model('Employee', employeeSchema);
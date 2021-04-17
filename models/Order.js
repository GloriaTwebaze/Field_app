const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose')

const orderSchema = new mongoose.Schema({
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
  phone_num: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  subscribe: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  remark: {
    type: String,
    
  }

});



module.exports = mongoose.model('Order', orderSchema);
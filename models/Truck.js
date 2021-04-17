const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose')

const truckSchema = new mongoose.Schema({
  truckname: {
    type: String,
    required: true,
  },
  truckregno: {
    type: String,
    required: true,
  },
  truckcode: {
    type: String,
    required: true
  }
});



module.exports = mongoose.model('Truck', truckSchema);
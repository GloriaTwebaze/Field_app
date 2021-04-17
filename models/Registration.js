const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const registrationSchema = new mongoose.Schema({ 
    
    email:{
        type: String,
        unique: true
        
    }
   
});


registrationSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model('Registration', registrationSchema);

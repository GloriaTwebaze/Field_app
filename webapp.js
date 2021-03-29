//importing modules
const express = require('express')
const app = express()
const reguserRoute = require('./routes/reguserRoute')
const registeruser = require('./routes/registeruser')
const user = require('./routes/user')
require('dotenv').config();
const mongoose = require('mongoose');
require('./models/Employee');


//connect to mongodb
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
// on connection
  mongoose.connection
    .on('open', () => {
      console.log('connected to database mongodb @27017');
    })
    .on('error', (err) => {
      console.log('error in database connection:'+err);
    });
// middlewares
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.urlencoded({extended: true}))
app.use('/public/images', express.static(__dirname + '/public/images'));

// routes
app.use('/', reguserRoute)
// app.use('/', registeruser)
app.use('/',user)








// creating server
app.listen(2008, () => console.log('server started at 2008'))
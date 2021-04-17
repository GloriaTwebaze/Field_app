//importing modules
const express = require('express')
const app = express()
const reguserRoute = require('./routes/reguserRoute')
const registeruser = require('./routes/registeruser')
const user = require('./routes/user')
require('dotenv').config();
const mongoose = require('mongoose');
require('./models/Employee');
const passport = require('passport');
const Registration = require('./models/Registration')
const login = require('./routes/login')
const order = require('./routes/orderRoute')
const truck = require('./routes/truckRoute')
const home = require('./routes/homeRoute')

// requiring express-session
const bodyParser = require('body-parser');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

//connect to mongodb
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

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
app.use(expressSession);
app.use('/public/images', express.static(__dirname + '/public/images'));
app.use(passport.initialize());
app.use(passport.session());
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());


// routes
app.use('/', reguserRoute)
app.use('/', registeruser)
app.use('/',user)
app.use('/',login)
app.use('/',order)
app.use('/',truck)
app.use('/',home)


// logout
app.post('/logout', (req, res) => {
  if (req.session) {
      req.session.destroy((err)=> {
          if (err) {
              console.log(err)
          } else {
              return res.redirect('/');
          }
      })
  }
})





// creating server
app.listen(2008, () => console.log('server started at 2008'))
const express = require('express')
const router = express.Router()
const Registration = require('../models/Registration')

router.get('/signup', (req, res) =>{
    res.render('signup')
})

router.post('/', (req, res) =>{
    res.render('registeruser')
})

router.post('/signup', async (req, res) => {
    try {
        const registration = new Registration(req.body);
        await Registration.register(registration, req.body.password, (err) => {
            if (err)
              { 
               throw err
              }
            console.log(req.body)
            res.redirect('/')
        })
    }catch(err){
        res.status(400).send('Sorry! Invalid inputs.')
        console.log(err)
    }
 });




module.exports = router;

const express = require('express')
const router = express.Router()
const Truck = require('../models/Truck')

router.get('/truck', (req, res) =>{
    res.render('registertruck')
});

router.post('/registertruck', async (req, res) => {
    try {
        const truck= new Truck(req.body);
        await truck.save()
        res.redirect('/trucklist')
    }catch(err){
        console.log(err);
        res.send('Sorry! Please fill all the required fields!');
    }
 })







module.exports = router;
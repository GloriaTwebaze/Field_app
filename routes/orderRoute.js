const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

router.get('/order', (req, res) =>{
    res.render('createorder')
});

router.post('/createorder', (req, res) =>{
    res.render('createorder')
});

router.post('/create order', async (req, res) => {
    try {
        const order= new Order(req.body);
        await order.save()
        res.redirect('/orderlist')
    }catch(err){
        console.log(err);
        res.send('Sorry! Please fill all the required fields!');
    }
 })



module.exports = router;
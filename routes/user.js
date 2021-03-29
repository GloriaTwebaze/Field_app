const express = require('express')
const router = express.Router()

router.get ('/', (req, res)=>{
    res.render('user')
})

router.post('/', (req, res) =>{
    res.render('registeruser')
})



module.exports = router;
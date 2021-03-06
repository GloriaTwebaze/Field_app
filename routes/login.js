const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req,res)=>{
    res.render('user')
})

// checks username and password using passport
router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
    req.session.user = req.user;
    res.redirect('/list');
})

module.exports = router;

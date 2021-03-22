const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug')
app.set('views', './views')


// routes
// user login route
app.get('/', (req, res) =>{
    res.render('user')
})

app.post('/', (req, res) =>{
    res.render('user')
})

app.get('/newUser', (req, res) =>{
    res.render('registeruser')
})




app.listen(2008, () => console.log('server started at 2008'))
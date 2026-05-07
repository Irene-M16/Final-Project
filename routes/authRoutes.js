const express = require('express');
const router = express.Router();


router.get('/signup', (req, res)=>{
    res.render('signup')
})
router.post('/signup', (req, res) =>{
    console.log(req.body)
    res.redirect('/auth/login' )   
})

router.get('/login', (req, res)=>{
    res.render('login')
})
router.post('/login', (req, res)=>{
    console.log(req.body)
})

module.exports = router;

//full path in routing
//fuull path applies to browser url, form action in the pug file and redirect in the routes
// /credentials/login
// /credentials/signup






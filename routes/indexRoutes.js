const express = require('express');
const router = express.Router();

//get index page
router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/signup', (req, res)=>{
    res.render('signup')
})
router.post('/signup', (req, res) =>{
    console.log(req.body)
})

router.get('/forgot', (req, res)=>{
    res.render('forgotPassword')
})
router.post('/forgot', (req, res)=>{
    console.log(req.body)
})

router.get('/login', (req, res)=>{
    res.render('login')
})
router.post('/login', (req, res)=>{
    console.log(req.body)
})


module.exports = router;
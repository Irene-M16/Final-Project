const express = require('express');
const router = express.Router();

//get index page
router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/forgot', (req, res)=>{
    res.render('forgotPassword')
})
router.post('/forgot', (req, res)=>{
    console.log(req.body)
})



module.exports = router;
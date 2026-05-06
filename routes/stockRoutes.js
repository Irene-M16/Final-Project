const express = require('express');
const router = express.Router();

router.get('/stockReg', (req, res) =>{
    res.render('stockReg')
});
router.post('/stockReg', (req, res) =>{
    console.log(req.body)
});

router.get('/invetory', (req, res) =>{
    res.render('invetory')
})

router.get('/price', (req, res)=>{
    res.render('price')
})

router.get('/storedash', (req, res)=>{
    res.render('storedash')
})



module.exports = router;
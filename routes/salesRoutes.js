const express = require('express');
const router = express.Router();

router.get('/salesDash', (req, res)=>{
    res.render('salesDash')
})

router.get('/stockLevel', (req, res)=>{
    res.render('stockLevel')
})

router.get('/record', (req, res)=>{
    res.render('record')
})

router.get('/receit', (req, res)=>{
    res.render('receit')
})

router.get('/receipt', (req, res)=>{
    res.render('receipt')
})









module.exports = router;
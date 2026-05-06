const express = require('express');
const router = express.Router();

router.get('/adminDash', (req, res)=>{
    res.render('adminDash')
})

router.get('/userReg', (req, res)=>{
    res.render('userReg')
})

router.get('/addUser', (req, res)=>{
    res.render('addUser')
})
router.post('/addUser', (req, res) =>{
    console.log(req.body)
});

router.get('/creditForm', (req, res)=>{
    res.render('creditForm')
})
router.post('/creditForm', (req, res) =>{
    console.log(req.body)
});

router.get('/depositScheme', (req, res)=>{
    res.render('depositScheme')
})

router.get('/formDeposit', (req, res)=>{
    res.render('formDeposit')
})
router.post('/formDeposit', (req, res) =>{
    console.log(req.body)
});

router.get('/reports', (req, res)=>{
    res.render('reports')
})

router.get('/supplier', (req, res)=>{
    res.render('supplier')
})

router.get('/transport', (req, res)=>{
    res.render('transport')
})



module.exports = router;
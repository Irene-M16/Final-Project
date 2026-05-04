//1. DEPENDENCIES
// console.log('Hi, its my final presentation');
const express = require('express');
const expressSession = require('express-session')
const path = require('path')


//2. INSTANTIATIONS
const app = express();
const port = 3000;

//3. CONFIGURATIONS


//4. MIDDLEWARE
//request time logger
// app.use((req, res, next) =>{
//     console.log("A new request received at "+ Date.now ());
//     // function/route handler.
//     next();
// });

//for specific routes
app.use('/life', (req, res, next) => {
    console.log('Another request received at ' + Date.now());
    next();
});

app.use(express.urlencoded({ extended: false }));

app.use(expressSession({
    secret:"life",
    resave: false,
    saveUninitialized: false,

}))

app.use(express.static(path.join(__dirname, 'public')));


//5. ROUTES
//Routing
//Structure of a route
// app.method(Path, handler)
// app.get('/', (req, res) => {
//     res.send('Homepage! Hi');
// })



// app.get('/adminDash', (req, res) => {
//     res.send('Show it');
// })

// app.get('/login', (req, res) =>{
//     res.send('Login');
//})

// app.get('/signin', (req, res) =>{
//     res.send('Put in the given details by the admin');
// })

app.get('/life', (req, res) =>{
    res.send('Life is not bread and drink');
})

// app.post('/signin', (req, res) =>{
//     res.send('Put in the given details by the admin');
// })

app.post('/sign', (req, res) =>{
    res.send('Put in the given details by the admin');
})

app.post('/forgot', (req, res) =>{
    res.send('Forgot password');
})

app.put('/life', (req, res) =>{
    res.send('Life is not bread and drink');
})

app.delete('sin', (req, res) =>{
    res.send('The sin conscious must go');
})


//Path Parameters
app.get('/pathparams/:firstname', (req, res) =>{
    res.send('My first name is '+ req.params.firstname);
})

//query strings/parameters
app.get('/dog/:origin', (req, res) =>{
    res.send('I am looking for a dog from '+ req.params.origin +'which is a '+ req.query.breed + 'and is '+ req.query.color + 'in color ')
})

app.get('/dog', (req, res) =>{
    res.send('I am looking for a dog from '+ req.query.origin +'which is a '+ req.query.breed + 'and is '+ req.query.color + 'in color ')
})


//Serving html file
//entering
app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/html/index.html");
})

app.get('/login', (req, res) =>{
    res.sendFile(__dirname + '/html/login.html');
})

app.get('/signup', (req, res) =>{
    res.sendFile(__dirname + '/html/signup.html');
})

app.get('/forgot', (req, res) =>{
    res.sendFile(__dirname + '/html/forgotPassword.html');
})

//sales
app.get('/salesDash', (req, res) =>{
    res.sendFile(__dirname + '/sales/salesDash.html');
})

app.get('/stock', (req, res) =>{
    res.sendFile(__dirname + '/sales/stockLevel.html');
})

app.get('/record', (req, res) =>{
    res.sendFile(__dirname + '/sales/record.html');
})

app.get('/receit', (req, res) =>{
    res.sendFile(__dirname + '/sales/receit.html');
})

app.get('/receipt', (req, res) =>{
    res.sendFile(__dirname + '/sales/receipts.html');
})

//store
app.get('/storeDash', (req, res) =>{
    res.sendFile(__dirname + '/store/storedash.html');
})

app.get('/stockreg', (req, res) =>{
    res.sendFile(__dirname + '/store/stockreg.html');
})

app.get('/price', (req, res) =>{
    res.sendFile(__dirname + '/store/price.html');
})

app.get('/invetory', (req, res) =>{
    res.sendFile(__dirname + '/store/invetory.html');
})

//admin
app.get('/adminDash', (req, res) =>{
    res.sendFile(__dirname + '/admin/adminDash.html');
})

app.get('/userReg', (req, res) =>{
    res.sendFile(__dirname + '/admin/userReg.html');
})

app.get('/supplier', (req, res) =>{
    res.sendFile(__dirname + '/admin/supplier.html');
})

app.get('/depositScheme', (req, res) =>{
    res.sendFile(__dirname + '/admin/depositScheme.html');
})

app.get('/transport', (req, res) =>{
    res.sendFile(__dirname + '/admin/transport.html');
})

app.get('/reports', (req, res) =>{
    res.sendFile(__dirname + '/admin/reports.html');
})

//forms
app.get('/creditForm', (req, res) =>{
    res.sendFile(__dirname + '/admin/creditForm.html');
})

app.get('/addUser', (req, res) =>{
    res.sendFile(__dirname + '/admin/addUser.html');
})

app.get('/formDeposit', (req, res) =>{
    res.sendFile(__dirname + '/admin/formDeposit.html');
})






























































//second last always
app.use((req, res) =>{
    res.status(404).send('Oops! Route not found.');
});

//6. BOOTSTRAPPING SERVER
//last line of code in the file always
app.listen(port, () => console.log (`listening on port $ {port}`));
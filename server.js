//1. DEPENDENCIES
// console.log('Hi, its my final presentation');
const express = require("express");
const expressSession = require("express-session");
const path = require("path");

//2. INSTANTIATIONS
const app = express();
const port = 3000;

//3. CONFIGURATIONS
//set templating engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//4. MIDDLEWARE
//for specific routes
//very important for static files to run
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(
  expressSession({
    secret: "life",
    resave: false,
    saveUninitialized: false,
  }),
);

//5. ROUTES
//for index
app.use("/", require("./routes/indexRoutes"));
//for stock
app.use("/stock", require("./routes/stockRoutes"));
//for sales
app.use("/sales", require("./routes/salesRoutes"));
//for admin
app.use("/admin", require("./routes/adminRoutes"));
//for auth
app.use("/auth", require("./routes/authRoutes"));

//second last always
app.use((req, res) => {
  res.status(404).send("Oops! Route not found.");
});

//6. BOOTSTRAPPING SERVER
//last line of code in the file always
app.listen(port, () => console.log(`listening on port $ {port}`));

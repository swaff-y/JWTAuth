//1. require express
const express = require('express');

//2. setup app
const app = express();

//tell server we are using ejs
app.set('view-engine', 'ejs')

//3. set the port
app.listen(3000);

//Posts Data
const users = require('./data');

//controllers
app.use('/', require("./controllers/index"));
app.use('/posts', require("./controllers/posts"));

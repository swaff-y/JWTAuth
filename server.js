require('dotenv').config()
//1. require express
const express = require('express');

//2. setup app
const app = express();

//tell server we are using ejs
app.set('view-engine', 'ejs')

//3. set the port
app.listen(3000);

//express to use json
app.use(express.json());

//Posts Data
const users = require('./data');

//controllers
app.use('/', require("./controllers/index"));
app.use('/posts', require("./controllers/posts"));
app.use('/login', require("./controllers/login"));

//To get SECRET
//1. node
//2. require("crypto").randomBytes(64).toString('hex')
//3. add to .env

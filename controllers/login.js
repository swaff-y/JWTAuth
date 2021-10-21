const express = require('express');
const router = express.Router();
//4. Require JWT
const jwt = require("jsonwebtoken");
const Login = require("../models/login");

//curl -X POST -H "Content-Type: application/json" -d '{"username":"Kyle"}' http://localhost:3000/login/
router.post('/',(req,res)=>{
  //Authenticate user

  const username = req.body.username;
  const user = { name: username };

  //take payload and seralize
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
})

module.exports = router

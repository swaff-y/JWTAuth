const express = require('express');
const router = express.Router();
const Login = require("../models/login");
const jwt = require("./jwt");

//curl -X POST -H "Content-Type: application/json" -d '{"email":"Kyle"}' http://localhost:3000/login/
router.post('/',(req,res)=>{
  //Authenticate user

  const user = { name: req.body.email };

  //take payload and seralize
  res.json({ accessToken: jwt.generateToken(user) });
})

module.exports = router

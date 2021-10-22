const express = require('express');
const router = express.Router();
const Login = require("../models/login");
const jwt = require("./jwt");

//curl -X POST -H "Content-Type: application/json" -d '{"email":"kyle@swaff.id.au", "password":"xxx"}' http://localhost:3000/login/
router.post('/', async (req,res)=>{
  //Authenticate user
  const user = await Login.find(req.body.email, req.body.password)

  //take payload and seralize
  if(user)
    res.json({ accessToken: jwt.generateToken(user) });
  else
    res.status(500).json({ message: "Error with server"})
})

module.exports = router

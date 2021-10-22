const express = require('express');
const router = express.Router();
const Users = require("../models/users");
const jwt = require("./jwt");

//curl http://localhost:3000/users
router.get("/", jwt.authenticateToken, (req,res) => {
  res.json(Users.all)
})

module.exports = router

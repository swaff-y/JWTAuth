const express = require('express');
const router = express.Router();
const Index = require("../models/index");

router.get("/", checkAuthenticated, (req,res) => {
  res.render("index.ejs", { name: "Swaff-y" });
})

function checkAuthenticated(req, res, next){
  next()
}

module.exports = router

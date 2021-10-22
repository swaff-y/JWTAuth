const express = require('express');
const router = express.Router();
const Index = require("../models/index");

//curl http://localhost:3000/login
router.get("/", (req,res) => {
  res.render("index.ejs", { name: "Swaff-y" });
})

module.exports = router

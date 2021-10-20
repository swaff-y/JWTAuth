const express = require('express');
const router = express.Router();
const Posts = require("../models/posts");

//Posts Data
const posts = require('../data');

//curl http://localhost:3000/posts | jq
router.get('/',(req,res)=>{
  res.json(posts);
})

module.exports = router

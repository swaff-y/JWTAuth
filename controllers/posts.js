const express = require('express');
const router = express.Router();
const Posts = require("../models/posts");
const jwt = require("./jwt");

//curl -X GET -H "Authorization: Bearer xxx" http://localhost:3000/posts | jq
router.get('/', jwt.authenticateToken, (req,res)=>{
  //only return posts that the user has access to
 //res.json(Posts.all.filter(post => post.username === req.user.name));

 //my way
 res.json(Posts.all)
})

module.exports = router

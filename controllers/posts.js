const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const Posts = require("../models/posts");

//curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZnJvZyIsImlhdCI6MTYzNDgxNTA2N30.eNRXJ1ofTLjWzDuZvsLSaCeKRPsquwB1_8uUDTnYVa0" http://localhost:3000/posts | jq
router.get('/', authenticateToken, (req,res)=>{
  //only return posts that the user has access to
 res.json(Posts.all.filter(post => post.username === req.user.name));
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if(!token){
    //Unauthorised
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //Token invalid
    if(err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

module.exports = router

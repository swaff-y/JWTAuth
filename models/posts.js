const Posts = function(){
  const data = require("../data");
  const ctx = {};

  ctx.all = data;

  return ctx;
}

module.exports = Posts()

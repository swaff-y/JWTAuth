const Users = function(){
  const data = require("../data");
  const ctx = {};

  ctx.all = data;
  ctx.find = function(id){
    return [{theId: id}];
  }

  return ctx;
}

module.exports = Users()

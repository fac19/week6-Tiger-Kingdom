const templates = require("../template");
const model = require("../model");

function deleteHandler(req, res) {
  let data = ""; 
  req.on("data", chunk => data+=chunk);
  req.on("end", ()=>{
    model.deletePost(data, res);
  }); 
}

module.exports = deleteHandler;

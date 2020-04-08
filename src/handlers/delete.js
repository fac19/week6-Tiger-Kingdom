const templates = require("../template");
const model = require("../model");

function deleteHandler(req, res) {
  console.log(req.url);
  let id = parseInt(req.url.match(/\d+/)[0]);
  console.log(id);
  model.deletePost(id, res);
}

module.exports = deleteHandler;

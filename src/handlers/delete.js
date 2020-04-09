const templates = require("../template");
const model = require("../model");

function deleteHandler(req, res) {
  let id = parseInt(req.url.match(/\d+/)[0]);
  model.deletePost(id, res);
}

module.exports = deleteHandler;

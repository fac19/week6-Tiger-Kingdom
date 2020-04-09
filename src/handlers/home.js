const templates = require("../template");
const db = require("../db/connection.js");
const model = require("../model.js");

function homeHandler(request, response, auth) {
  model
    .getPosts()
    .then(result => result.rows)
    .then(posts => {
      response.end( auth? templates.loggedIn(posts) : templates.home(posts));
    })
    .catch(console.error);
}

module.exports = homeHandler;

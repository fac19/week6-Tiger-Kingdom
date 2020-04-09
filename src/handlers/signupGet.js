const templates = require("../template");


function signupGetHandler(request, response) {
    response.writeHead(200, {
        "content-type": "text/html"
    });
    response.end(templates.signupPage());
}

module.exports = signupGetHandler;
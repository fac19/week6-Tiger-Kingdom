const templates = require("../template");

function loginGetHandler(request, response) {
    response.writeHead(200, {
        "content-type": "text/html"
    });
    response.end(templates.loginPage());
}

module.exports = loginGetHandler;
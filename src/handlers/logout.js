const templates = require("../template");
const db = require("../db/connection.js");
const model = require("../model.js");
const getBody = require("../getBody");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

function logoutPostHandler(request, response) {
    response.writeHead(
        302, {
            'Location': '/',
            'Set-Cookie': `TigerKingdom=0; Max-Age=0`
        });
    return response.end();
}

module.exports = logoutPostHandler;
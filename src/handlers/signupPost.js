const templates = require("../template");
const db = require("../db/connection.js");
const model = require("../model.js");


function signupPostHandler(req, res) {
    console.log('hello from signupost')
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
        const user = new URLSearchParams(body);
        const userObj = Object.fromEntries(user);
        model
            .createNewUser(userObj.signup_username, userObj.signup_password)
            .then(() => {
                res.writeHead(302, {
                    location: "/login"
                });
                res.end();
            })
            .catch(err => console.error(err));
    });
}


module.exports = signupPostHandler;
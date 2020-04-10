const templates = require("../template");
const db = require("../db/connection.js");
const model = require("../model.js");
const getBody = require("../getBody");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;


function loginPostHandler(request, response) {
    getBody(request)
        .then((body) => {
            const params = new URLSearchParams(body);
            const username = params.get('login_username');
            const password = params.get('login_password');
            console.log("Login attempt:", username, password);

            model.getUser(username)
                .then(dbUser => {
                    console.log(`This is password ${password} and this is dbpassword ${dbUser.user_password} and this is the id ${dbUser.id}`)
                    const dbID = dbUser.id
                    bcrypt.compare(password, dbUser.user_password)
                        .then((match) => {
                            if (!match) throw new Error('Password does not match!');
                            console.log('Great! You have succeeded!');

                            const cookie = jwt.sign({
                                id: dbID,
                                userCookie: username,
                                passwordCookie: password
                            }, secret);
                            response.writeHead(
                                302, {
                                    'Location': '/',
                                    'Set-Cookie': `TigerKingdom=${cookie}; HttpOnly; Max-Age=20000`
                                });
                            return response.end()
                        })

                        .catch(err => {
                            response.writeHead(401, {
                                "content-type": "text/plain"
                            });
                            response.end(err.message);
                        })

                })

                .catch(err => {
                    response.writeHead(401, {
                        "content-type": "text/plain"
                    });
                    response.end("User not found");
                })
        });
}

module.exports = loginPostHandler;


//     // getBody(request)
//     .then(body => {
//         const user = new URLSearchParams(body);
//         const email = user.get("email");
//         const password = user.get("password");
//         model
//           .getUser(email)
//   +       .then(dbUser => bcrypt.compare(password, dbUser.password))
//   +       .then(match => {
//   +         if (!match) throw new Error("Password mismatch");
//             // GENERATE JWT AND SENDBACK IN COOKIE HEADER
//             response.writeHead(200, {
//                 "content-type": "text/html",
//                 "Set-Cookie": token  
//             });
//             response.end(`
//               <h1>Welcome back, ${email}</h1>
//             `);
//           })
//           // ...
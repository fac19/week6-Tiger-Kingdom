const templates = require("../template");
const db = require("../db/connection.js");
const model = require("../model.js");
const getBody = require("../getBody");
const bcrypt = require("bcryptjs");

function loginPostHandler(request, response) {
    getBody(request)
    .then((body) => {
        const params = new URLSearchParams(body);
        const username = params.get('login_username');
        const password = params.get('login_password');
        console.log("Login attempt:", username, password);
    
        model.getUser(username)
        .then(dbUser => {
            bcrypt.compare(password, dbUser.user_password)
            .then((res)=> {
                if (!res) throw new Error ('Password does not match!');
                console.log('Great! You have succeeded!');
                // Create a JWT and give it to them in a cookie
            })
            .catch( err => {
                response.writeHead(401, { "content-type": "text/plain" });
                response.end(err.message);
            })
        })
        .catch( err => {
            response.writeHead(401, { "content-type": "text/plain" });
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
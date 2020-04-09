const templates = require("../template");
const db = require("../db/connection.js");
const model = require("../model.js");
const bcrypt = require("bcryptjs");

function signupPostHandler(req, res) {
  console.log("hello from signupost");
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    const user = new URLSearchParams(body);
    const userObj = Object.fromEntries(user);

    password = userObj.signup_password;

    bcrypt
      .genSalt(10)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hash) =>
        model
          .createNewUser(userObj.signup_username, hash)
          .then(() => {
            res.writeHead(302, {
              location: "/login",
            });
            res.end();
          })
          .catch(err)(() => {
          res.writeHead(401, { "content-type": "text/plain" });
          res.end("401 conflict: user already exists?");
        })
      )
      .catch((err) => console.error);
  });
}

module.exports = signupPostHandler;

// +     bcrypt
// +       .genSalt(10)
// +       .then(salt => bcrypt.hash(password, salt))
// +       .then(hash => model.createUser({ email, password: hash }))
//         .then(() => {
//           response.writeHead(200, { "content-type": "text/html" });
//           response.end(`
//             <h1>Thanks for signing up, ${email}</h1>
//           `);
//         })
//     + 2 catches to handle errors

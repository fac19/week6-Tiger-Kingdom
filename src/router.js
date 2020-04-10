const cookie = require('cookie');
const jwt = require('jsonwebtoken');
const deleteHandler = require("./handlers/delete.js");
const homeHandler = require("./handlers/home.js");
const missingHandler = require("./handlers/missing.js");
const publicHandler = require("./handlers/public.js");
const submitGetHandler = require("./handlers/submitGet.js");
const submitPostHandler = require("./handlers/submitPost.js");
const loginGetHandler = require("./handlers/loginGet.js");
const loginPostHandler = require("./handlers/loginPost.js");
const logoutHandler = require("./handlers/logout.js");
const signupGetHandler = require("./handlers/signupGet.js");
const signupPostHandler = require("./handlers/signupPost.js");
const userHandler = require("./handlers/user.js");

const secret = process.env.SECRET;

function checkAuth(auth, res) {
  if (!auth) {
    res.writeHead(302, {
      "location": "/login"
    })
    res.end()
    return false;
  }
  return true;
}

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url.includes("public/")) return publicHandler(request, response);
  if (url === "/logout") return logoutHandler(request, response);
  if (url === "/login" && method === "GET") return loginGetHandler(request, response);
  if (url === "/login" && method === "POST") return loginPostHandler(request, response);
  if (url === "/signup" && method === "GET") return signupGetHandler(request, response);
  if (url === "/signup" && method === "POST") return signupPostHandler(request, response);
  if (url.includes("user/")) return userHandler(request, response);

  let auth = false;
  if (request.headers.cookie) {
    cookie_body = request.headers.cookie.split("ingdom=")[1];
    // console.log("COOKIE BODY:", cookie_body);
    try {
      auth = jwt.verify(cookie_body, secret);
    } catch (err) {
      console.error("JWT ERROR:", err)
    }
  }

  console.log("AUTH STATUS IS:", auth)

  if (url === "/") return homeHandler(request, response, auth);

  if (url === "/submit" && method === "GET") {
    if (checkAuth(auth, response)) return submitGetHandler(request, response);
  }
  if (url === "/submit" && method === "POST") {
    if (checkAuth(auth, response)) return submitPostHandler(request, response);
  }
  if (url.includes("/delete-post")) {
    if (checkAuth(auth, response)) return deleteHandler(request, response, auth);
  }

  missingHandler(request, response);


}
module.exports = router;
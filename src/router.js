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

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url.includes("/delete-post")) {
    deleteHandler(request, response);
  } else if (url === "/") {
    homeHandler(request, response);
  } else if (url === "/submit" && method === "GET") {
    submitGetHandler(request, response);
  } else if (url === "/submit" && method === "POST") {
    submitPostHandler(request, response); //BROKEN
  } else if (url === "/logout" && method === "POST") {
    logoutHandler(request, response);
  } else if (url === "/login" && method === "GET") {
    loginGetHandler(request, response);
  } else if (url === "/login" && method === "POST") {
    loginPostHandler(request, response);
  } else if (url === "/signup" && method === "GET") {
    signupGetHandler(request, response);
  } else if (url === "/signup" && method === "POST") {
    signupPostHandler(request, response);
  } else if (url.includes("public/")) {
    publicHandler(request, response);
  } else if (url.includes("user/")) {
    userHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
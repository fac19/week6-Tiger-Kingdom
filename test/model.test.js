const test = require("tape");
const build = require("../database/build");

const { newPost, getPosts, deletePost, getUserPosts } = require("../model");

test("tests are running!", (t) => {
  const x = 5;
  t.equal(x, 5, "this is working");
  t.end();
});

test("Can get all posts from one user", (t) => {
  build().then(() => {
    const user = "chloe";
    getUserPosts(user)
      .then((data) => {
        t.equal(data[0]., type);
        t.equal(data[data.length - 1].type, type);
        t.end();
      })
      .catch((err) => {
        t.error(err), t.end();
      });
  });
});

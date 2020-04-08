const db = require("./db/connection.js");

function getPosts() {
  return db
    .query(
      `
        SELECT *
        FROM users
        INNER JOIN img_posts ON users.id = img_posts.author_id; `
    )
    .catch((err) => {
      console.log("Here be error", err);
    });
}

function newPost(message) {
  return db
    .query("INSERT INTO users(username) VALUES($1)", [message.username])
    .then(() => {
      return db
        .query(`SELECT id FROM users where username=($1)`, [message.username])
        .then((item) => {
          return item.rows.map((obj) => obj.id);
        })
        .then((idArr) => {
          return db.query(
            "INSERT INTO img_posts(author_id, post, img_url) VALUES($1, $2, $3)",
            [idArr[0], message.post_text, message.img_url]
          );
        });
    });
}

function deletePost(postId, res) {
  console.log(res.end);
  db.query("DELETE FROM img_posts WHERE ($1)=id", [postId])
    .then(res.end)
    .catch(console.err);
}

function getUserPosts(user) {}

module.exports = { newPost, getPosts, deletePost };

const templates = require("../template");
const model = require("../model");

function deleteHandler(req, res, auth) {
  const requestingUser = auth.id;
  const postId = parseInt(req.url.match(/\d+/)[0]);
  model.postAuthorID(postId).then( actualOwner => {
      if (requestingUser === actualOwner){
          model.deletePost(postId, res).then( _ => {
            res.writeHead(302, { "location": "/" });
            res.end();
          })
      } else {
        res.writeHead(403, { "content-type": "text/plain" });
        res.end("403: Forbidden - this post is not yours to delete!");      
      }
  })
  .catch( err => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Something went wrong with your delete! " + err); 
  });
}

module.exports = deleteHandler;

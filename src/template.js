function sharedLayout(bodyContent, navButton) {
  return `<!DOCTYPE html>
    <html lang="en">    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Tiger Kingdom">
            <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Lato:wght@300&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Rye&display=swap" rel="stylesheet"
            <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">

            <link rel="stylesheet" href="./public/main.css">
            <title>Tiger Kingdom</title>
        </head>
            <header>
            <nav class="navbar">
            <h1 class="navbar_title">Tiger Kingdom</h1>
            ${navButton}
          </nav>
             
            </header>
        <body>
            <div class="container">
                ${bodyContent}
            </div>
        </body>
        <script src="https://kit.fontawesome.com/794b746eef.js" crossorigin="anonymous"></script>
        <script src="public/main.js"></script>
    </html>
    `;
}

function makeArticle(obj) {
  return `    
    <article class="post">
    <p class="post__author">${obj.username} wrote:</p>
    <p class="post__textContent">${obj.post}</p>
    <p class="post__date">on: ${obj.post_date
      .toString()
      .split(" ")
      .slice(0, 3)
      .join(" ")}</p>
      <img class="post__img" src=${
        obj.img_url
      } onerror="this.onerror=null;this.src='https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';"/>
      <a class="post__remove-button"
      aria-label="button to remove post"
      href="/delete-post?id=${obj.id}">
        <i class="fas fa-trash-alt"></i>
      </a>
    </button>
  </article>
`;
}

function home(postObjArr) {
  let str = postObjArr.map((item) => makeArticle(item)).join("\n");
  return sharedLayout(
    str,
    `<a href="/login" class="navbar__links" aria-label="Login">login</a>
  <a href="/signup" class="navbar__links" aria-label="Sign up">Signup</a>`
  );
}

function loggedIn(postObjArr) {
  let str = postObjArr.map((item) => makeArticle(item)).join("\n");
  return sharedLayout(
    str,
    `<a href="/logout" class="navbar__links" aria-label="Logout">Logout</a> 
    <a href="/submit" class="navbar__links" aria-label="Write a new post">New Post!</a>`
  );
}

function submitPage() {
  return sharedLayout(
    `
    <form class="form" action="submit" method="POST">
      <label for="username">Author: </label>
      <input id="username" name="username" placeholder="who are you?" required>
      <label for="post_text">Write Post</label>
      <textarea id="post_text" rows="10" cols="50" name="post_text" aria-label="write something here" placeholder="What's your favorite tiger?" required></textarea>
      <label for='post_image'>Post a picture!</label>
      <input id='post_image' name='img_url' placeholder="https://tiger-image.tigggersplash.com/photo" required> 
      <button class="form__button" type="submit">Add Post</button>
    </form>
  `,
    `<a href="/" class="navbar__links" aria-label="Go back to Home">Home</a>`
  );
}

function missingPage() {
  return `
  <h1>404 Page not found!</h1>
  <img class="missing-resource-image" src="https://media.giphy.com/media/13ROLRgvNf5WQo/giphy.gif" alt="404 resource not found">
  <br><a href="/" class="navbar__links" aria-label="Go back to Home">Go back</a>`;
}

// signup form

function signupPage() {
  return sharedLayout(
    `
      <h1>Sign up to Enter the Tiger Kingdom...</h1>
      <form id="signupForm" class="form" action="signup" method="POST">
        <label for="signup_username">Username:<span aria-hidden="true">*</span> </label>
        <input
          class="signup_inputs"
          id="signup_username"
          name="signup_username"
          placeholder="Enter username"
          minlength="5"
          required
        />

        <label for="signup_password">Password:<span aria-hidden="true">*</span></label>
        <div id="passwordRequirements" class="requirements">
          Passwords must contain at least one letter and one number, and contain
          at least 8 characters.
        </div>
        <input
          class="signup_inputs"
          id="signup_password"
          name="signup_password"
          type='password'
          placeholder="Don't do password123!"
          required
          aria-describedby="passwordRequirements passwordError"
          required
          minlength="8"
        />

        <button class="form__button" type="submit">signup</button>
      </form>
    `,
    `<a href="/" class="navbar__links" aria-label="Go back to Home">Home</a>`
  );
}

// login form

function loginPage() {
  return sharedLayout(
    `
      <h1>Login in ...pretty please</h1>
      <form class="form" action="login" method="POST">
        <label for="login_username"> Username:  <span aria-hidden="true">*</span> </label>
        <input
          id="login_username"
          name="login_username"
          type='password'
          placeholder="Username please"
          required
        />
        <label for="login_password"> Password:<span aria-hidden="true">*</span> </label>
        <input
          id="login_password"
          name="login_password"
          placeholder="Hidden password, I see you..."
          required
        />
        <button class="form__button" type="submit">
          login </button> </form >
        </button>
      </form>
    `,
    `<a href="/" class="navbar__links" aria-label="Go back to Home">Home</a>`
  );
}

module.exports = {
  submitPage,
  missingPage,
  home,
  loggedIn,
  signupPage,
  loginPage,
};
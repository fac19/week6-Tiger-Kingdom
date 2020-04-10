# Week 6 Project: Tiger-Kingdom

![](https://media.giphy.com/media/1430ZmFYxLxeHm/giphy.gif)

---

https://tiger-kingdom.herokuapp.com/

Go there now!!!

---

## Project Description - K

#### Micro blog with login/sign up page, with tiger theme!

![](https://media.giphy.com/media/1ke5E84BQ4MUM/giphy.gif)

---

## SHOW DEMO 

![](https://media.giphy.com/media/11qlIxn2BixfX2/giphy.gif)
[** **ROAR!!!** **](https://tiger-kingdom.herokuapp.com/)

---

## Planning, Using Miro - T

![](https://i.imgur.com/ebvONoK.png =700x)

###### [Miro Link](https://miro.com/app/board/o9J_kuUrkt4=/)

---

##### Routes and Tables
![](https://i.imgur.com/jjvIh36.png)



---

## Learning Objectives

- Tom: Authentication, form validation
- Roger: DB testing, Authentication
- Kat: **Authentication!!!!** :checkered_flag: and everything else!
- Chloe: Authentication, reinforcing knowledge of db queries, testing and node templates


---

## Estimation - R

##### **E1** - Short task, can bang out quickly 
##### **E2** - Normal difficulty, no additional help needed
##### **E3** - Hard task, requires team help
##### **E5** - Really hard task, Requires mini spike 
![](https://i.imgur.com/8S75mPH.png)

---

## Database Schema - C

```sql=
BEGIN;

    DROP TABLE IF EXISTS users, img_posts
    CASCADE;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(225) NOT NULL,
    user_password TEXT
);

CREATE TABLE img_posts
(
    id SERIAL PRIMARY KEY,
    author_id INTEGER REFERENCES users(id),
    post TEXT NOT NULL,
    img_url TEXT,
    post_date DATE NOT NULL DEFAULT CURRENT_DATE
);

COMMIT;

```

---

## What we're proud of :100: - K

- Getting to grips with deployment and databases on Heroku
- We all got to touch most aspects of the project
- DB queries
- Split the issues well - communicated what we wanted to learn
- Could easily talk to all team members
- Tasteful and professional styling

---

#### In main.js - T

```javascript
let images = document.querySelectorAll("img");
images.forEach((img) => {
  img.onerror = function () {
    this.src =
      "https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png"; // place your error.png image instead
  };
});
```

---

#### In router.js - R

```javascript

    function checkAuth(auth, res) {
        if (auth) return true;
        res.writeHead(302, { "location": "/login" })
        res.end()
        return false;
    }
    
    auth = jwt.verify(cookie_body, secret);

    if (url.includes("/delete-post")) {
        if (checkAuth(auth, res)) return deleteHandler(req, res, auth);
    }
```

---

#### Different pages for logged in users - R
```javascript
function homeHandler(request, response, auth) {
  model
    .getPosts()
    .then(result => result.rows)
    .then(posts => {
      response.end( auth ? templates.loggedIn(posts) : templates.home(posts));
    })
    .catch(console.error);
}

```

---

## What we could have improved on :imp: 

- Didn't lean on database constraints as much as we could
- Could have expolited the data storage aspect of JWT more
- More testing for each DB query
- Client-side form validation using JS
- Accessibility, not enough time spent

---


## Resources
[Miro](https://miro.com/app/board/o9J_kuUrkt4=/)
[Boiler Plate](https://github.com/oliverjam/postgres-boilerplate)
[Week 5- Project](https://github.com/fac19/week5-DGHP)
[Week 6- Tiger-Kingdom](https://github.com/fac19/week6-Tiger-Kingdom)

---

## Questions?????

![](https://media.giphy.com/media/cMVgEhDeKzPwI/giphy.gif)


<!-- GitHub Co-Auther
Co-authored-by: tacotoemeck <wagner.tomek@gmail.com>
Co-authored-by: Roger-Heathcote <github@technicalbloke.com>
Co-authored-by: Chloeh24 <chloeh24@hotmail.com>
Co-authored-by: Alexreid95 <alexreid95@gmail.com> -->

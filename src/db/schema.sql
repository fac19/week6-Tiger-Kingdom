BEGIN;

    DROP TABLE IF EXISTS users, blog_posts
    CASCADE;


CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(225) NOT NULL,
    user_password TEXT NOT NULL
);

CREATE TABLE blog_posts
(
    id SERIAL PRIMARY KEY,
    author_id INTEGER REFERENCES users(id),
    post TEXT NOT NULL,
    img_url TEXT,
    post_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO users
    (username, user_pasword)
VALUES
    ('tom', '1234'),
    ('Chloe', 'password123'),
    ('Kat', 'AlexReid'),
    ('Roger', '123456789a');

INSERT INTO blog_posts
    (author_id, post, img_url)
VALUES
    (1, 'This is a picture of a Tiger', 'https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
    (2, 'I like Tigers', 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
    (3, 'Tigers are great', 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
    (4, 'TIGER TIGER TIGER TIGER', 'https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');

COMMIT;
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

INSERT INTO users
    (username, user_password)
VALUES
    ('Tom', '$2a$10$3IAfxI7ekmnHqMv1T8a46O./avVNcq/YYk6SGkRwxEHsy9cQasuUy'),
    ('Chloe', '$2a$10$3IAfxI7ekmnHqMv1T8a46O./avVNcq/YYk6SGkRwxEHsy9cQasuUy'),
    ('Kat', '$2a$10$det9UYQkW9avEapZQHEti.hcEYC6s4t0YzpXW1C949xMXxQpi.RC2'),
    ('Roger', '$2a$10$Ii5o1InMg1gy4k9ylTTfiOyzDfOzKJ2n.6NuuxdgrPmx088X0DXna');

INSERT INTO img_posts
    (author_id, post, img_url)
VALUES
    (1, 'This is a picture of a Tiger', 'https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
    (2, 'I like Tigers', 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
    (3, 'Tigers are great', 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
    (4, 'TIGER TIGER TIGER TIGER', 'https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');

COMMIT;
  
CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  title VARCHAR (100) NOT NULL,
  image_url VARCHAR (500) NOT NULL,
  content VARCHAR (500)
);


CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR (100) NOT NULL,
  hash text NOT NULL
);


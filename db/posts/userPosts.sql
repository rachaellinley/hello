SELECT user_id, title, img, content
FROM posts
INNER JOIN users
ON posts.user_id=users.user_id
WHERE users.user_id = $1
  
SELECT posts.*, users.username FROM posts 
INNER JOIN users 
ON posts.user_id = users.id
WHERE posts.title = $1;
insert into posts( id, title, image_url, content )
values ( $1, $2, $3, $4)
return * ;
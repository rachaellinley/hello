
async function addPost (req, res){
  const { title, img, content} = req.body;
  const user_id = req.session.user.user_id;

  const db = req.app.get("db");

  await db.posts.addPost([  title, img, content, user_id]);
  const userPosts = await req.app.get('db').posts.userPosts([req.session.user.user_id]);
  // console.log(addedPosts)
  res.status(200).json(userPosts);
}
async function allPosts(req, res){
    const db = req.app.get("db");
    const posts = await db.posts.allPosts();

    res.status(200).json(posts);
}


  async function editPost(req, res) {
    const { category_name, brand, product, content } = req.body;
    const post_id = +req.params.post_id;
    const user_id = req.session.user.user_id;
    console.log(user_id);
    console.log(typeof user_id)
    console.log(req.body);
  
    const db = req.app.get("db");
  
    const editedPost = await db.posts.editPost([
      category_name,
      brand,
      product,
      content,
      post_id,
      user_id
    ])
    console.log(editedPost)
    res.status(200).json(editedPost);
  }

async function userPosts (req, res){

  if(req.session.user) {
    const userPosts = await req.app.get('db').posts.userPosts([req.session.user.user_id]);
    console.log(userPosts);
    if(userPosts){
      res.status(200).send(userPosts);
    }else{
      res.sendStatus(404)
    }
  } else {
    res.sendStatus(500);
  }
}

 

module.exports = {
    addPost,
    allPosts,
    editPost,
    userPosts

}
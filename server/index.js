require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();


//controllers
const ac = require("./controllers/authController");
// const rc = require("./controllers/postsController");

//dotenv
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

//middleware
app.use(express.json());




// session
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }))

  //db
  massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("db is connected!")
  })

//de-structured controllers
//authentication controller 
const {user, registerUser, loginUser, logout} = ac;

//reviews controller
// const { addReview, allReviews, deleteReview, editReview, userReviews} = rc; 

//auth endpoints
app.get("/auth/user", user);
app.post("/auth/register", registerUser);
app.post("/auth/login", loginUser);
app.get("/auth/logout", logout);

//posts endpoints
app.get("/api/posts", getAllPosts);
app.get("/api/posts/userposts", getPostsByTitle);
app.get("/api/post/:post_id", getPostById);
app.post("/api/posts", addPost);


app.listen(SERVER_PORT, () => {
    console.log(`Server Port Listening On: ${SERVER_PORT}`)
  })
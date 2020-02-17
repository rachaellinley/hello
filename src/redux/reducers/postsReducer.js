import Axios from "axios";


const initialState = {
  posts: [],
  userPosts:[],
  loading: false
}

const GET_ALL_POSTS = "GET_ALL_POSTS";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const USER_POST = "USER_POST";

export function getAllPosts() {
  return {
    type: GET_ALL_POSTS,
    payload: Axios.get("/api/posts")
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: Axios.post("/api/posts", post)
  }
}

export function editPost(post_id, updated_post) {
  return {
    type: EDIT_POST,
    payload: Axios.put(`/api/posts/${post_id}`, updated_post)
  }
}


export function deletePost(post_id) {
  return {
    type: DELETE_POST,
    payload: Axios.delete(`/api/posts/${post_id}`)
  }
}

export function userPosts() {
  return {
    type: USER_POSTS,
    payload: Axios.get("/api/posts/profile")
  }
}

//reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case `${GET_ALL_POSTS}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${GET_ALL_POSTS}_FULFILLED`: {
      console.log(payload.data)
      return {
        ...state,
        posts: payload.data
      }
    }
    case `${ADD_POST}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${ADD_POST}_FULFILLED`: {
      console.log("post ran")
      return {
        ...state,
        posts: payload.data
      }
    }


    case `${EDIT_POST}_FULFILLED`: {
      return {
        ...state,
        reviews: payload.data,
        loading: false
      }
    }
    case `${USER_POST}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
      case `${USER_POST}_FULFILLED`: {
        return {
          ...state,
          userPosts: payload.data,
          loading: false
        }
    }


      
    default:
      return state;
  }
}
import { combineReducers } from "redux";

const postsReducer = (prevState = [], action) => {
  switch (action.type) {
    case "FETCHED_POSTS":
      return action.posts
    default:
      return prevState
  }
}


const loadingReducer = (prevState = "false", action) => {
  switch (action.type) {
    case "FETCHED_POSTS":
      return false
    case "LOADING_POSTS":
      return true
    default:
      return prevState
  }
}


const rootReducer = combineReducers({
  posts: postsReducer,
  loading: loadingReducer,
})

export default rootReducer
import { combineReducers } from "redux";
import login from "./login";
import posts from "./posts";

export default combineReducers({
  login,
  posts,
});

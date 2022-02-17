import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

// adding reducer "posts" into the redux store
export const reducers = combineReducers({ posts, auth });

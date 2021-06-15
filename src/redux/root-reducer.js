// Import combineReducers from redux library to combine all reduccer

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});

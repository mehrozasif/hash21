import { combineReducers } from "redux";
import auth from "./auth";
import admin from "./admin";
import user from "./user";


export default combineReducers({
  auth,
  admin,
  user,
});

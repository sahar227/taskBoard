import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  isLoggedIn: logInReducer,
  form: formReducer
});

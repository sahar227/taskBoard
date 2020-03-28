import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import userBoardsReducer from "./userBoardsReducer";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  isLoggedIn: logInReducer,
  boards: userBoardsReducer,
  form: formReducer
});

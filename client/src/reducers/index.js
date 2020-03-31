import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import userBoardsReducer from "./userBoardsReducer";
import { reducer as formReducer } from "redux-form";
import selectedBoardReducer from "./selectedBoardReducer";

export default combineReducers({
  isLoggedIn: logInReducer,
  boards: userBoardsReducer,
  selectedBoard: selectedBoardReducer,
  form: formReducer
});

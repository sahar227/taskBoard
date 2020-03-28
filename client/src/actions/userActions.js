import history from "../history";
import { LOG_IN, LOG_OUT } from "./actions";
import { authToken } from "../configs";
import api from "../apis/api";

export const logOut = () => {
  localStorage.setItem(authToken, null);
  api.defaults.headers["x-auth-token"] = null;
  history.push("/login");
  return {
    type: LOG_OUT
  };
};

export const logIn = credentials => async dispatch => {
  const response = await api.post("/auth", credentials);
  if (response.status === 200) {
    localStorage.setItem(authToken, response.data);
    api.defaults.headers["x-auth-token"] = response.data;
    history.push("/boards");
    dispatch({
      type: LOG_IN,
      payload: "success"
    });
  }
};

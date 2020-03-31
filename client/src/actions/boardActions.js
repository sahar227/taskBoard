import api from "../apis/api";
import {
  RETRIEVE_BOARDS,
  BOARD_CREATED,
  BOARD_DELETED,
  BOARD_SELECTED
} from "./actions";

export const fetchBoards = () => async dispatch => {
  const response = await api.get("/board");
  if (response.status === 200) {
    dispatch({
      type: RETRIEVE_BOARDS,
      payload: response.data
    });
  }
};

export const createBoard = title => async dispatch => {
  const response = await api.post("/board", { title });
  if (response.status === 200) {
    dispatch({
      type: BOARD_CREATED,
      payload: response.data
    });
  }
};

export const removeBoard = boardId => async dispatch => {
  const response = await api.delete(`/board/${boardId}`);
  if (response.status === 200) {
    dispatch({
      type: BOARD_DELETED,
      payload: boardId
    });
  }
};

export const fetchBoard = boardId => async dispatch => {
  const response = await api.get(`/board/${boardId}`);
  if (response.status === 200) {
    dispatch({
      type: BOARD_SELECTED,
      payload: response.data
    });
  }
};

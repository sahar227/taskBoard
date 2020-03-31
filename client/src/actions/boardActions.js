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

const fetchResource = async route => {
  const resource = await api.get(route);
  if (resource?.status !== 200) return null;
  return resource.data;
};

export const fetchBoard = boardId => async dispatch => {
  const boardResponse = await fetchResource(`/board/${boardId}`);
  const listsResponse = await fetchResource(`/list/${boardId}`);
  const tasksResponse = await fetchResource(`/task/${boardId}`);

  const isSuccess = boardResponse && listsResponse && tasksResponse;

  if (isSuccess) {
    const payload = {
      board: boardResponse,
      lists: listsResponse,
      tasks: tasksResponse
    };
    dispatch({
      type: BOARD_SELECTED,
      payload
    });
  }
};

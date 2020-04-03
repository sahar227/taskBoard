import {
  RETRIEVE_BOARDS,
  BOARD_CREATED,
  BOARD_DELETED,
  BOARD_EDITTED
} from "../actions/actions";

const userBoardsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case RETRIEVE_BOARDS:
      return payload;
    case BOARD_CREATED:
      return [...state, payload];
    case BOARD_DELETED:
      return state.filter(board => board._id !== payload);
    case BOARD_EDITTED:
      const newBoard = [...state];
      newBoard[newBoard.findIndex(b => b._id === payload._id)] = payload;
      return newBoard;
    default:
      return state;
  }
};

export default userBoardsReducer;

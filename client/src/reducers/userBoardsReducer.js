import {
  RETRIEVE_BOARDS,
  BOARD_CREATED,
  BOARD_DELETED
} from "../actions/actions";

const userBoardsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case RETRIEVE_BOARDS:
      return payload;
    case BOARD_CREATED:
      return [...state, payload];
    case BOARD_DELETED:
      return state.filter(board => board._id !== payload);
    default:
      return state;
  }
};

export default userBoardsReducer;

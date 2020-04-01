import { BOARD_SELECTED, LIST_CREATED } from "../actions/actions";

const selectedBoardReducer = (state = null, { type, payload }) => {
  switch (type) {
    case BOARD_SELECTED:
      return payload;
    case LIST_CREATED:
      return { ...state, lists: [...state.lists, payload] };
    default:
      return state;
  }
};

export default selectedBoardReducer;

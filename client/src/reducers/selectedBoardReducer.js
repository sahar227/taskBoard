import { BOARD_SELECTED } from "../actions/actions";

const selectedBoardReducer = (state = null, { type, payload }) => {
  switch (type) {
    case BOARD_SELECTED:
      return payload;
    default:
      return state;
  }
};

export default selectedBoardReducer;

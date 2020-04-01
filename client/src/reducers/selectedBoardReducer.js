import {
  BOARD_SELECTED,
  LIST_CREATED,
  LIST_REMOVED,
  TASK_CREATED,
  TASK_REMOVED
} from "../actions/actions";

const selectedBoardReducer = (state = null, { type, payload }) => {
  switch (type) {
    case BOARD_SELECTED:
      return payload;
    case LIST_CREATED:
      return { ...state, lists: [...state.lists, payload] };
    case LIST_REMOVED:
      return {
        ...state,
        lists: state.lists.filter(list => list._id !== payload)
      };
    case TASK_CREATED:
      return { ...state, tasks: [...state.tasks, payload] };
    case TASK_REMOVED:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== payload)
      };
    default:
      return state;
  }
};

export default selectedBoardReducer;

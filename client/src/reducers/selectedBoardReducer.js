import {
  BOARD_SELECTED,
  BOARD_EDITTED,
  LIST_CREATED,
  LIST_REMOVED,
  TASK_CREATED,
  TASK_REMOVED,
  TASK_EDITED,
  LIST_EDITTED
} from "../actions/actions";

const selectedBoardReducer = (state = null, { type, payload }) => {
  switch (type) {
    case BOARD_SELECTED:
      return payload;
    case BOARD_EDITTED:
      return { ...state, board: payload };
    case LIST_CREATED:
      return { ...state, lists: [...state.lists, payload] };
    case LIST_REMOVED:
      return {
        ...state,
        lists: state.lists.filter(list => list._id !== payload)
      };
    case LIST_EDITTED:
      const newLists = [...state.lists];
      newLists[newLists.findIndex(l => l._id === payload._id)] = payload;
      return {
        ...state,
        lists: newLists
      };
    case TASK_CREATED:
      return { ...state, tasks: [...state.tasks, payload] };
    case TASK_REMOVED:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== payload)
      };
    case TASK_EDITED:
      const newTasks = [...state.tasks];
      newTasks[newTasks.findIndex(t => t._id === payload._id)] = payload;
      return {
        ...state,
        tasks: newTasks
      };
    default:
      return state;
  }
};

export default selectedBoardReducer;

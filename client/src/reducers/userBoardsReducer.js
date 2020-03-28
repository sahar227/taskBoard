import {RETRIEVE_BOARDS, BOARD_CREATED} from '../actions/actions';

const userBoardsReducer = (state = [], {type, payload}) => {
    switch(type) {
        case RETRIEVE_BOARDS: return payload;
        case BOARD_CREATED: return [...state, payload];
        default: return state;
    }
};

export default userBoardsReducer;
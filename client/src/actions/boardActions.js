import api from '../apis/api';
import {RETRIEVE_BOARDS, BOARD_CREATED} from './actions';

export const fetchBoards = () => async dispatch => {
    const response = await api.get('/board');
    dispatch({
        type: RETRIEVE_BOARDS,
        payload: response.data
    });
};

export const createBoard = (title) => async dispatch => {
    const response = await api.post('/board', {title});
    if(response.status === 200) {
        dispatch({
            type: BOARD_CREATED,
            payload: response.data
        });
    }
}
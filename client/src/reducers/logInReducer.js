import { LOG_IN, LOG_OUT } from "../actions/actions";
import {authToken} from '../configs';

const logInReducer = (previousState, action) => {
    switch(action.type) {
        case LOG_IN:  return action.payload === 'success';
        case LOG_OUT: return false;
        default: return localStorage.getItem(authToken) !== 'null';
    }
}

export default logInReducer;
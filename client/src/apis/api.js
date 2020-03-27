import axios from 'axios';
import {baseURL, authToken} from '../configs';

export default axios.create({
    baseURL,
    headers: {
        'x-auth-token': localStorage.getItem(authToken)
    }
});
export const GET_LIST = 'GET_LIST';
export const ADD_NOTICE = 'ADD_NOTICE';
export const DELETE_NOTICE = 'DELETE_NOTICE';
import api from '../api';

export const getList =  () => {
    return {
        type: GET_LIST,
        payload: api.getItems()
    };
}

export const addNotice = (title, description, date, period) => {
    return {
        type: 'sdfkjsh',
        item: api.createNotice(title, description, date, period)
    }
}

export const deleteNotice = (id) => {
    return {
        type: DELETE_NOTICE,
        id: id
    }
}
export const GET_LIST = 'GET_LIST';
export const ADD_NOTICE = 'ADD_NOTICE';
export const DELETE_NOTICE = 'DELETE_NOTICE';

export const getList =  () => {
    return {type: GET_LIST};
}

export const addNotice = (title, description, date, period) => {
    return {
        type: ADD_NOTICE,
        item: {title, description, date, period}
    }
}

export const deleteNotice = (id) => {
    return {
        type: DELETE_NOTICE,
        id: id
    }
}
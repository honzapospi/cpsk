import {GET_LIST, ADD_NOTICE, DELETE_NOTICE} from '../actions';

let id = 1;

export default (state = [], action) => {
    if(action.type == GET_LIST){
        return state;
    } else if(action.type == ADD_NOTICE){
        let item = action.item;
        item.id = id;
        id++;
        return [...state, item]
    } else if(action.type == DELETE_NOTICE){
        return state.filter((item) => {
            return item.id != action.id
        })
    }

    return state;


}
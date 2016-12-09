import {combineReducers} from 'redux';
import RemindListReducer from './RemindListReducer';

export default combineReducers({
    remind_list: RemindListReducer
})
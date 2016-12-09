const url = 'http://skoleni.anywhere.cz/react/remindme/api';
import axios from 'axios';

export default {
    getItems: function () {
        return axios.get(url+'/notice');
    },

    createNotice: function(title, description, date, period){
        return axios.post(url+'/notice', {title, description, date, period});
    }
}
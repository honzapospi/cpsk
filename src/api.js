const url = 'http://skoleni.anywhere.cz/react/remindme/api';
import axios from 'axios';

export default {
    getItems: function () {
        return new Promise((result, reject) => {
            return axios.get(url+'/notice').then((data) => {
                console.log(data);
                result(data.data.data)
            }).catch(reject);
        });
    },

    createNotice: function(title, description, date, period){
        return axios.post(url+'/notice', {title, description, date, period});
    }
}
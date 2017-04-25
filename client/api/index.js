var axios = require('axios');

//import { apiPrefix } from '../../etc/config.json';
var apiPrefix = 'https://mern-jamaurz.c9users.io';

export default {
    add(eventName) {
        return axios.post(apiPrefix + '/add', {'event': eventName});
    },
    singIn() {
        return axios.get(apiPrefix + '/info')
    },
    getEvent() {
       return axios.get(apiPrefix + '/getevent');
    }
}

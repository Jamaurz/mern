import api from '../api';

export function addEvent(value) {
    return {
        type: "ADD_EVENT",
        payload: value
    }
}

export function getEvent(callback) {
    api.getEvent().then(function(data) {
        if(data) {
            var res = {};
            for(var i = 0; i < data.data.length; i++) {
                res[data.data[i].place] = data.data[i].user;
            }
            callback(res);
        }
    })
}

export function getAllEvent(value) {
    return {
        type: "GET_ALL_EVENT",
        payload: value
    }
}

export function add(eventName, callback) {
    api.add(eventName).then(function(data) {
        //console.log('data add action', data)
        
        if(!data.data) {
            callback(false);
        } else {
            callback(data.data);
        }
        
    });
}

export function singIn(callback) {
    var sign = api.singIn();
    sign.then(function(data) {
        if(data) {
            callback(data.data);
        }
    });
}


export function singInTwitter(value) {
    return {
        type: "SING_IN_TWITTER",
        payload: value
    }
}

export function twitter(value) {
    console.log('value', value);
    return {
        type: "TWITTER",
        payload: value
    }
}

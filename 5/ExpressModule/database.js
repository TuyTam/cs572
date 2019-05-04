const axios = require('axios');

var getAllUsers = async function (callback) {
    try{
        let response = await axios.get('https://randomuser.me/api/?results=10');
        console.log(JSON.stringify(response.data));
        callback(JSON.stringify(response.data));
    }catch (e) {
        console.log(('ERROR'));
        callback(null);
    }
};

module.exports = {
    'getAllUsers' : getAllUsers
};
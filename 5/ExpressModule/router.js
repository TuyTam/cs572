const express = require('express');
const database = require('./database');
const router = express.Router();

// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Exercise 5' });
// });

router.get('/allusers', function (req, res, next) {
    database.getAllUsers((data) => {
        config(res);
        configPage(res);
        if(data != null){
            res.send(data);
            console.log("Hi there");
        }else {
            res.send('Data not found');
            console.log("Data not found");
        }
    })
});

function config(res) {
    res.set('Cache-Control', 'private, max-age = 24*60*60');
}

function configPage(res) {
    let links =   "http://localhost:8888/api/users/?page=3>; rel='next'," +
        "http://localhost:8888/api/users/?page=10>; rel='last'," +
        "http://localhost:8888/api/users/?page=2>; rel='first'," +
        "http://localhost:8888/api/users/?page=1>; rel='prev'";
    res.set('Link', links);
}

module.exports = router;
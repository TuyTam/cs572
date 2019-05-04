var express = require('express');
var router = require('./router');

//Initialization
const port = 3000;
var app = express();

app.set('port',port);
app.disable('etag');
app.set('trust proxy', true);
app.set('case sensitive routing', true);
app.set('strict routing', true);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/allusers', router);

app.listen(port,()=>{
    console.log('Express server is listening port: ', port);
});



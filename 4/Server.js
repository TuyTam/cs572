const http = require('http');
const {fork} = require('child_process');
const server = http.createServer();


server.on('request',(req, res)=> {
    const childprocess = fork('CheckSystem.js');
    childprocess.send('start');
    childprocess.on('message', result =>{
        res.end('Response message: ' + result);
    });
});

server.listen(3000);
const http = require('http');
const{fork} = require('child_process');
const server = http.createServer();
const url = require('url');


server.on('request',(req, res)=> {
    const myURL = url.parse(req.url,true);
    //const myURL = url.parse('http://localhost:3000/?url=test.html',true);

    const childprocess = fork('ReadTXTChildProcess.js');
    console.log(myURL.query.url);
    childprocess.send(myURL.query.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    childprocess.on('message', result =>{
        res.end(result);
    });
});

server.listen(3000);
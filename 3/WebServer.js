var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    var html = fs.readFileSync('/Users/tamphan/IdeaProjects/FirstProject/test.html','utf8');
    res.write(html);
    res.end();

    //var rs = fs.createReadStream('/Data/VisualStudioCode.app').pipe(res);

}).listen(8888, ()=> console.log('listening on 1337'));


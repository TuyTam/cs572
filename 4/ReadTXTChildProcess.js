const fs = require('fs');
const path = require('path');

const readTXTFile = (filepath) =>{
    return result = fs.readFile(path.join(__dirname,filepath),'utf8',function (err,data) {})

}

process.on('message',(filepath)=>{
    console.log('Checking your system...');
    const result = readTXTFile(filepath);
    //process.send('Done reading file ' + filepath);
    process.send(result);
})
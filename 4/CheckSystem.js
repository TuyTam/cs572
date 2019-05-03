const os = require('os');

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) //+ ' ' + sizes[i];
};

const checkSystem = () => {
    const cpuCount = os.cpus().length;
    const mem = os.totalmem();
    let result = "";
    if(cpuCount < 2){result = "Processor is not supported";}
    else if(mem < 8){result = "This app needs at least 4 GB of RAM";}
    else{
        result = 'System is checked successfully';
    }
    return result;
};

process.on('message',(msg)=>{
    console.log('Checking your system...');
    const result = checkSystem();
    process.send(result);
})
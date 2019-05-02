var EventEmitter = require('events');

class Gym extends EventEmitter{
    constructor(){
        super();
    }

    boom(){
       setInterval(()=>{
           this.emit('run');
           console.log('=============' )
       } ,1000);

    }

}

var gymmer = new Gym();
gymmer.on('run',function () {
    console.log('Athlete is working out...')
})
gymmer.boom();
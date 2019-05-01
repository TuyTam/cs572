
Array.prototype.even = function() {
    setImmediate(()=>{
        let newarr = (this.filter(x => x%2 == 0));
        console.log(newarr);
    });
};

Array.prototype.odd = function(){
    setImmediate(()=> {
        let newarr = this.filter(x => x % 2 != 0);
        console.log(newarr);
    });
};


    console.log('start');
    [1,2,3,4,5,6,7].even();
    [1,2,3,4,5,6,7].odd();
    console.log('end');




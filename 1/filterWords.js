String.prototype.filterWords1 = function(input){
  let words = this.split(" ");
  words = words.map(x => input.includes(x)? "***" : x);
  return words.join(" ");
}
console.log("ES6:");
console.log("This house is nice".filterWords1(['house','nice']))

//Promise

String.prototype.filterWords2 = function(input){
  let words = this.split(" ");
  
  let promise = function(){
    return new Promise(function(resolve, reject){
    words = words.map(x => input.includes(x)? "***" : x);
      if(words !== null){
        resolve(words.join(" ") + "=> from Promise");
      }
      else{
        reject("Failed");
      }
   
  });
  };
  
  let getPromise = function(){
     promise()
  .then((message)=>console.log(message))
  .catch(err => console.error(err));
  }
 
 getPromise();
  
}
console.log("Promise:");
console.log("This house is nice".filterWords2(['house','nice']) + "=== Promise")

//Async/await

String.prototype.filterWords3 = function(input){
  let words = this.split(" ");
  
  let promise = function(){
    return new Promise(function(resolve, reject){
    words = words.map(x => input.includes(x)? "***" : x);
      if(words !== null){
        resolve(words.join(" "));
      }
      else{
        reject("Failed");
      }
   
  });
  };
  
  async function waitForPromise(){
    try{
      console.log("Before async/await for promise");
      let result = await promise();
      console.log(result + "====from async/await");
      console.log("After async/await for promise");
    }
    catch{
      console.log("error");
    }
 
  }
 
 waitForPromise();
  
}
console.log("$$$$$ Async/Await :");
console.log("This house is nice".filterWords3(['house','nice']))

String.prototype.filterWords4 = function (input) {
    const{from} = rxjs;
    const{map,reduce} = rxjs.operators;
    let words = this.split(" ");

    from(words).pipe(
        map(x => input.includes(x) ? "***" : x),
        reduce((x,y) => x + " " + y)
    ).subscribe(
            x => console.log(x),
            null,
            ()=> console.log('done')
        )

}

console.log("This house is nice".filterWords4(['house','nice']));


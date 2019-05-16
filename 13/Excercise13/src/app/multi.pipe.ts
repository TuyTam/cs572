import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: any, ...args): any {
    let times = args[0];
    console.log("Times:" + times);
    var result = "";
    for(let i = 0; i< times; i++){
      result = value + " " + result;
      
    }
    console.log("=======Pipe result: " + result);
    return result;
  }

}

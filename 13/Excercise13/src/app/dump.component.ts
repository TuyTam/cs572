import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `
    <p>
      dump works!
    </p>
    <ul> 
      <li *ngFor = "let item of dataInput">{{item.Name}} - {{item.Age}}</li>
    </ul>
    
    <button appIsVisible status = 'visible'> Custom Directive </button>

    <div appMakeBigger>Make Bigger</div>
    <input type = "text" #input (keyup) = "0">
    <p>{{input.value | multi:3}}</p>
    
  `,
  styles: []
})
export class DumpComponent implements OnInit {
  @Input() dataInput;

  constructor() { }

  ngOnInit() {
  }

}

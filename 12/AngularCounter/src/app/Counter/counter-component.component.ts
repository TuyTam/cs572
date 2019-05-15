import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'myapp',
  template: `<button (click) = "subtract()"> - </button>
   {{counterValue}} 
  <button (click) = "add()"> + </button>
  <input [value]="counterValue" (input)="counterValue = $event.target.value">
  {{counter}} 
  {{ComponentCounterValue}}
  `,
  styles: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {
  counterValue = 0;
  @Input() counter;
  @Input() ComponentCounterValue;

  @Output() counterChange = new EventEmitter();

  emitChange(){
    this.counterChange.emit(this.counterValue);
    this.ComponentCounterValue = this.counterValue;
  }

  constructor() { }

  ngOnInit() {
    this.counterValue = this.counter;
    this.log('ngOnInit');
    
  }
  private log(msg: string) {
    console.log(msg);
  }

  subtract(){
    this.counterValue--;
    this.counter = this.counterValue;
    
  }

  add(){
    this.counterValue++;
    this.counter = this.counterValue;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <p>
      smart works! {{data}}
    </p>
    <app-dump [dataInput]="data"></app-dump>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  data = [{Name: "Tam", Age: 30},
  {Name: "Test", Age: 30}, {Name: "MWA", Age: 30}];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-comp1',
  template: `
  <button (click) = "onLoad()"> Load Online Data</button>
  <button (click) = "onGet()"> Sava data into Local Storage</button>
  <ul *ngIf="load">
  <li *ngFor="let item of localStorage.results" >
    -- gender: {{item.gender}}
    -- name: {{item.name.first}}

  </li>
</ul> 

  `
})
export class Comp1Component {

 private load = 'false';

 private objects = localStorage.getItem('results');

private localStorage = {};

  constructor(private dataService: DataServiceService){
    
  }

  onLoad(){
    return this.dataService.getOnlineData();
  }

  onGet(){
    this.load = 'true';
    this.localStorage = this.dataService.getCachedData();
  }


}

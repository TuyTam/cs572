import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
        <div class="col-xs-10">
            <h1>Routing Examples!</h1>
            <hr>
            <a [routerLink]="['home']">Home</a> |
          
            <a [routerLink]="['users', 'query']" [queryParams]="{id: id.value}">Query Param</a> |
            
            <input type="text" #id (input)="0">
        
            <a [routerLink]="['guards']">Guards</a>
            <hr>
            <router-outlet></router-outlet>
        </div>
    </div>
</div>
  `,
 
  providers: [DataServiceService,HttpClient]
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.dataService.getOnlineData();
  
  }
  title = 'ServiceProject';

  constructor(private dataService: DataServiceService){
    
  }



}

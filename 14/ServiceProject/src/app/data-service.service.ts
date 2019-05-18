import { Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const STORAGE_KEY = "Data";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DataServiceService {
 
  constructor(public http: HttpClient) { }


  getOnlineData(){
    this.http.get('https://randomuser.me/api/?results=10')
    .subscribe((res) => {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(res));
                console.log('Get online data.....');
                console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)).results);
              });      
  }

  getCachedData(){
    console.log('====== Get cached data ========');
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)).results);
    return JSON.parse(localStorage.getItem(STORAGE_KEY)).results;
  }

}

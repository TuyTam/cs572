import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  template: `
    <p>
      userdetails works!
    </p>
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {

  private subscription : Subscription;
  id: string;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.subscription = activatedRoute.params
    .subscribe((param: any) => this.id = param['id']);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

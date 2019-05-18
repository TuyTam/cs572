import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1.component';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './data-service.service';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails.component';
import { RouterModule, Routes} from '@angular/router';

const MY_ROUTES: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: UsersComponent},
  {path:'users/query', component: UserdetailsComponent},
  {path: '**', redirectTo: 'home'}
];


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    UsersComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

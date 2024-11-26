import { Routes } from '@angular/router';
import path from 'path';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { MasterComponent } from './components/master/master.component';
import { ReportsComponent } from './components/reports/reports.component';

export const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path:'client', component:ClientComponent},
  {path:'master',component:MasterComponent},
  {path:'reports', component:ReportsComponent}

];

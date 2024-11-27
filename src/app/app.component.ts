import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MasterComponent } from './components/master/master.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle'
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ClientComponent,
    HomeComponent,
    LoginComponent,
    MasterComponent,
    ReportsComponent,
    SignupComponent,
    MatSlideToggleModule,
    NavbarComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projeto-rotas';
}

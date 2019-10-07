import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {HomeUserComponent} from './components/home-user/home-user.component';
import {NewProyectComponent} from './components/new-proyect/new-proyect.component';


const APP_ROUTES:Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'user', component: HomeUserComponent },
  { path: 'new-proyect', component: NewProyectComponent },
  { path: '**' , pathMatch: 'full' , redirectTo: 'home'}
];

export  const APP_ROUTING =  RouterModule . forRoot ( APP_ROUTES, { useHash: true} );

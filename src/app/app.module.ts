import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from  './app.routing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FooterTransparentComponent } from './components/footer-transparent/footer-transparent.component';
import { RegistrerComponent } from './components/registrer/registrer.component';


import { ConsultasService } from './services/consultas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProyectsComponent,
    FooterComponent,
    LoginComponent,
    FooterTransparentComponent,
    RegistrerComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    APP_ROUTING,
    BrowserModule
  ],
  providers: [ConsultasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';
import {Router} from '@angular/router';
import {ConsultasService} from '../../services/consultas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usuario: UserModel;

  constructor(private router: Router, private consultasService: ConsultasService) { }

  ngOnInit() {
    this.usuario = new UserModel();
    if (localStorage.getItem('USER_TOKEN')) {
      this.usuario.token = localStorage.getItem('USER_TOKEN');
      this.usuario.email = localStorage.getItem('EMAIL');
      this.usuario.nombre = localStorage.getItem('NOMBRE');
    }
  }

  logout() {
    this.consultasService.logout();
    this.router.navigate(['/home']);
  }

}

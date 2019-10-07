import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../../services/consultas.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {

  usuario: UserModel;

  constructor(private consultasService: ConsultasService) { }

  ngOnInit() {
    this.usuario = new UserModel();
    this.usuario.nombre = localStorage.getItem("NOMBRE");
    this.usuario.email = localStorage.getItem("EMAIL");
    this.usuario.token = localStorage.getItem("USER_TOKEN");
    this.consultasService.getProyectos(this.usuario.token).subscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../../services/consultas.service';
import {UserModel} from '../../models/user.model';
import {ProyectModel} from '../../models/proyect.model';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {

  usuario: UserModel;
  proyects: ProyectModel[];

  constructor(private consultasService: ConsultasService) { }

  ngOnInit() {
    this.usuario = new UserModel();
    this.usuario.nombre = localStorage.getItem("NOMBRE");
    this.usuario.email = localStorage.getItem("EMAIL");
    this.usuario.token = localStorage.getItem("USER_TOKEN");
    this.proyects = new Array();
    this.consultasService.getProyectos(this.usuario.token).subscribe(res => {

      for (const pos in res ) {
        this.setProyect(res[pos]);
      }
      console.log(this.proyects);
    });
  }

  private setProyect( proyect: ProyectModel ) {
    this.proyects.push(proyect);

  }

}

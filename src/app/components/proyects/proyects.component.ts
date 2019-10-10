import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../../services/consultas.service';
import {ProyectModel} from '../../models/proyect.model';
import {UserModel} from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  proyects: ProyectModel[];
  usuario: UserModel;

  constructor(private router: Router, private consultasService: ConsultasService) { }

  ngOnInit() {
    this.usuario = new UserModel();
    this.usuario.nombre = localStorage.getItem('NOMBRE');
    this.usuario.email = localStorage.getItem('EMAIL');
    this.usuario.token = localStorage.getItem('USER_TOKEN');
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

  private viewProyect(proyect) {
    localStorage.setItem('PROYECT', JSON.stringify(proyect));
    this.router.navigate(['/proyect']);
  }

}

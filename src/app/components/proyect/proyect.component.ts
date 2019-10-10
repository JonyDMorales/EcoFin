import { Component, OnInit } from '@angular/core';
import {ProyectModel} from '../../models/proyect.model';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.scss']
})
export class ProyectComponent implements OnInit {

  proyect: ProyectModel;
  constructor() {
    this.proyect = JSON.parse(localStorage.getItem('PROYECT'));

    console.log(this.proyect);
  }

  ngOnInit() {
  }

}

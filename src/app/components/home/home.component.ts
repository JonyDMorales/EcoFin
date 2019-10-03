import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../../services/consultas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private consultasService: ConsultasService) { }

  ngOnInit() {
    this.consultasService.getAllProyects().subscribe();
  }

}

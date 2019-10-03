import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../services/consultas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private consultasService: ConsultasService) { }

  ngOnInit() {
    this.consultasService.getAllProyects();
  }

}

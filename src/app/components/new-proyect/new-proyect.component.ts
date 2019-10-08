import { Component, OnInit } from '@angular/core';
import {ProyectModel} from '../../models/proyect.model';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ConsultasService} from '../../services/consultas.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.scss']
})
export class NewProyectComponent implements OnInit {

  proyecto: ProyectModel;
  archivoSobreDrop = false;

  constructor(private router: Router, private consultasService: ConsultasService) {
    this.proyecto = new ProyectModel();
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if ( form.valid ) {
      this.consultasService.saveProyect(this.proyecto).subscribe(res => {
        this.router.navigate(['/user']);
      });
    }
    console.log(form);
  }

}

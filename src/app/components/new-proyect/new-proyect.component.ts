import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.scss']
})
export class NewProyectComponent implements OnInit {

  file: File;
  archivoSobreDrop = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.file);
  }

}

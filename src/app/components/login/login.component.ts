import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../services/consultas.service';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: UserModel = new UserModel();

  constructor(private router: Router, private consultasService: ConsultasService) { }

  ngOnInit() {
    this.usuario.email = 'jony@stratosmex.com';
    this.usuario.password = '1234';
  }

  public onSubmit(formLogin: NgForm) {
    if (formLogin.controls.email.invalid) {
      Swal.fire({
        type: 'error',
        text: 'Formato de email incorrecto',
        showConfirmButton: false,
        timer: 2000
      });
    }
    if (formLogin.controls['password'].invalid) {
      Swal.fire({
        type: 'error',
        text: 'la contraseña debe contener por lo menos 8 caracteres',
        showConfirmButton: false,
        timer: 2000
      });
    }
    if (formLogin.valid) {
      console.log(this.usuario);
      this.consultasService.login(this.usuario.email, this.usuario.password).subscribe(res => {
        this.router.navigate(['/user']);
      });
    }

  }

}

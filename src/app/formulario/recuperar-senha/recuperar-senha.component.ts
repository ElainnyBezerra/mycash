import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit, OnDestroy {

  passForm = new FormGroup({
    password: new FormControl('', [Validators.required])});

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.querySelector('html').style.background = 'linear-gradient(to right, #020024, #090979, #00d4ff)';
  }

  ngOnDestroy(): void {
    document.querySelector('html').style.background = 'none';
  }

  loginReturn() {
    this.router.navigate(['/login']);
    
  }

  conf() {
    if(this.passForm.valid){
      localStorage.setItem('inserSenha', '1234');
      localStorage.setItem('confSenha', '1234');       
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Favor preencher os campos'
    });
    }
  }
  pass() {
    if(localStorage.inserSenha != localStorage.confSenha){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Os campos estão diferentes'
      });
    } else {
        this.router.navigate(['/login']);
}
  }
}

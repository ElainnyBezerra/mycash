import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.querySelector('html').style.background = 'linear-gradient(to right, #020024, #090979, #00d4ff)';
  }

  ngOnDestroy(): void {
    document.querySelector('html').style.background = 'none';
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }

}

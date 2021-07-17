import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './sharedComponent/navbar/navbar.component';
import { RelatorioReceitaComponent } from './receita/relatorio-receita/relatorio-receita.component';
import { RelatorioDespesaComponent } from './despesa/relatorio-despesa/relatorio-despesa.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CadastrosComponent } from './formulario/cadastros/cadastros.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './formulario/recuperar-senha/recuperar-senha.component'
import { CadastrarUsuarioComponent } from './formulario/cadastrar-usuario/cadastrar-usuario.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Material design modules
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundComponent } from './sharedComponent/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RelatorioReceitaComponent,
    RelatorioDespesaComponent,
    DashboardComponent,
    CadastrosComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    CadastrarUsuarioComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

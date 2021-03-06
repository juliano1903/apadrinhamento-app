import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Usuario } from '../../modelos/usuario';


@Injectable()
export class AuthServiceProvider {

  private _usuarioLogado: Usuario;
  private logado: boolean;

  constructor(private _http: HttpClient) {
  }

  efetuaLogin(usuarioLogin) {
    this.logado = true;
      return this._http.post('http://localhost:8100/v1/usuario/login', usuarioLogin)
      .do((usuario: Usuario) => {
        this._usuarioLogado = usuario;
        console.log('Login: ' + this._usuarioLogado.nome);
      })
  }

  obtemUsuarioLogado() {
    return this._usuarioLogado;
  }

  logout() {
    this.logado = false;
  }

  isLogged() {
    debugger;
    return this.logado;
  }
}

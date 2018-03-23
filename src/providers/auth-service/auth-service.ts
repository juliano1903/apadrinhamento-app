import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Usuario } from '../../modelos/usuario';


@Injectable()
export class AuthServiceProvider {

  private _usuarioLogado: Usuario;

  constructor(private _http: HttpClient) {
  }

  efetuaLogin(matricula, senha) {
    //aqui chamar o serviço de login
    return this._usuarioLogado;
  }

}

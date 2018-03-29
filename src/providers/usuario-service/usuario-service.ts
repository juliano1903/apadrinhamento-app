import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../modelos/usuario';

@Injectable()
export class UsuarioServiceProvider {

  constructor(private _http: HttpClient) {
    console.log('Hello UsuarioServiceProvider Provider');
  }

  pendentesAceite() {
    return this._http.get<Usuario[]>('http://localhost:8080/v1/usuario/pendentes-aceite');
  }

}

import { Injectable } from '@angular/core';
//import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../modelos/usuario';

@Injectable()
export class UsuarioServiceProvider {

  constructor(private _http: HttpClient) {
    console.log('Hello UsuarioServiceProvider Provider');
  }

  pendentesAceite() {
    return this._http.get<Usuario[]>('http://localhost:8100/v1/usuario/pendentes-aceite');
  }

  cadastrarAluno(usuario) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': 'http://localhost:8100'
      })
    };

    return this._http.post('http://localhost:8100/v1/usuario/salva', usuario);
    //return this._http.post<Usuario[]>('http://localhost:8080/v1/usuario/pendentes-aceite', data, options);
  }

}

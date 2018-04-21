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

  pendentesVinculacao() {
    return this._http.get<Usuario[]>('http://localhost:8100/v1/usuario/pendentes-vinculacao');
  }
  
  calourosPendentesVinculacao() {
    return this._http.get<Usuario[]>('http://localhost:8100/v1/usuario/calouro/pendentes-vinculacao');
  }

  vateranosPendentesVinculacao() {
    return this._http.get<Usuario[]>('http://localhost:8100/v1/usuario/veterano/pendentes-vinculacao');
  }

  cadastrarAluno(usuario) {

    const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': 'http://localhost:8100',
        'x-access-token': 'teste'
      })
    };

    return this._http.post('http://localhost:8100/v1/usuario/salva', usuario, httpOptions);
  }

  aprovarCadastro(usuario) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
         'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
         'Access-Control-Allow-Origin': 'http://localhost:8100'
       })
     };
    
    console.log('aprova cadastro');
    console.log(usuario);
    return this._http.post('http://localhost:8100/v1/usuario/aprova-cadastro', usuario);
    //return this._http.post<Usuario[]>('http://localhost:8080/v1/usuario/pendentes-aceite', data, options);
  }

  vincularAlunos(vinculoUsuarios) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
         'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
         'Access-Control-Allow-Origin': 'http://localhost:8100'
       })
     };
    
    console.log('Vincular usuarios');
    console.log(vinculoUsuarios);
    return this._http.post('http://localhost:8100/v1/usuario/vincula', vinculoUsuarios);

  }

}

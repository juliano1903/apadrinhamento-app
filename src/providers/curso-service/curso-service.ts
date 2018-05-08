import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../../modelos/curso';

/*
  Generated class for the CursoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursoServiceProvider {

  constructor(public _http: HttpClient) {
    console.log('Hello CursoServiceProvider Provider');
  }

  findAll() {
    return this._http.get<Curso[]>('http://localhost:8100/v1/curso/');
  }

  findById(idCurso) {
    return this._http.get<Curso[]>('http://localhost:8100/v1/curso/id/'+ idCurso);
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../../modelos/evento';


/*
  Generated class for the EventoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoServiceProvider {

  constructor(public _http: HttpClient) {
    console.log('Hello EventoServiceProvider Provider');
  }

  proximosEventos() {
    return this._http.get<Evento[]>('http://localhost:8100/v1/evento/');
  }

}

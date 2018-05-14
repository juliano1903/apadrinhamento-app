import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Estrutura } from '../../modelos/estrutura';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the EstruturaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EstruturaServiceProvider {

  constructor(public _http: HttpClient) {
    console.log('Hello EstruturaServiceProvider Provider');
  }

  estruturas() {
    return this._http.get<Estrutura[]>('http://localhost:8100/v1/estrutura/');
  }

}

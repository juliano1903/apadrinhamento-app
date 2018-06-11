import { Injectable } from '@angular/core';
//import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../modelos/usuario';
import { VinculoUsuarios } from '../../modelos/vinculoUsuarios';
import { AuthServiceProvider } from '../auth-service/auth-service';
import * as firebase from 'Firebase';
import { Interacao } from '../../modelos/interacao';


@Injectable()
export class UsuarioServiceProvider {

  usuarioLogado: Usuario;
  
  data = { nome:'' };
  ref = firebase.database().ref('salas/');

  constructor(private _http: HttpClient, private _authService: AuthServiceProvider) {
    this.usuarioLogado = _authService.obtemUsuarioLogado();
  }

  pendentesAceite(idCurso) {
    return this._http.get<Usuario[]>('http://localhost:8100/v1/usuario/pendentes-aceite/' + idCurso);
  }

  usuariosAceitos(idCurso) {
    return this._http.get<Usuario[]>('http://localhost:8100/v1/usuario/aceitos/' + idCurso);
  }

  pendentesVinculacao(idCurso) {
    return this._http.get<Usuario[]>('http://localhost:8100/v1/usuario/pendentes-vinculacao/' + idCurso);
  }
  
  calourosPendentesVinculacao(idCurso) {
    return this._http.get<Usuario[]>('http://localhost:8100/v1/usuario/calouro/pendentes-vinculacao/' + idCurso);
  }

  vateranosPendentesVinculacao(idCurso) {
    return this._http.get<Usuario[]>('http://localhost:8100/v1/usuario/veterano/pendentes-vinculacao/' + idCurso);
  }

  usuariosVinculados(idCurso) {
    return this._http.get<VinculoUsuarios[]>('http://localhost:8100/v1/usuario/vinculados/' + idCurso);
  }

  vinculoUsuario(idUsuario) {
    return this._http.get<VinculoUsuarios>('http://localhost:8100/v1/usuario/vinculo-usuario/' + idUsuario);
  }

  buscaInteracoes(vinculoUsuario: VinculoUsuarios) {

    let idVeterano = vinculoUsuario.usuarioVeterano.idUsuario;
    let idCalouro = vinculoUsuario.usuarioCalouro.idUsuario;

    return this._http.get<Interacao[]>('http://localhost:8100/v1/interacao/' + idVeterano +'/'+ idCalouro +'/');
  }

  registrarInteracao(interacao) {

    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
         'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
         'Access-Control-Allow-Origin': 'http://localhost:8100',
         'x-access-token': 'teste'
       })
     };

     console.log(interacao);

     return this._http.post('http://localhost:8100/v1/interacao/salva', interacao, httpOptions);
    
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

  salvarAvaliacao(avaliacao) {

    avaliacao.usuario = this.usuarioLogado;

    console.log(avaliacao);

    const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': 'http://localhost:8100',
        'x-access-token': 'teste'
      })
    };

    return this._http.post('http://localhost:8100/v1/usuario/avaliacao/salva', avaliacao, httpOptions);
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

  desvincularAlunos(vinculoUsuarios) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
         'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
         'Access-Control-Allow-Origin': 'http://localhost:8100'
       })
     };
    
    console.log('Desvincular usuarios');
    console.log(vinculoUsuarios);
    return this._http.post('http://localhost:8100/v1/usuario/desvincula', vinculoUsuarios);
  
  }

  enviarMensagemGrupo(mensagem) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
         'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
         'Access-Control-Allow-Origin': 'http://localhost:8100'
       })
     };
    
    console.log('Enviar mensagem grupo');
    console.log(mensagem);
    return this._http.post('http://localhost:8100/v1/usuario/grupo/mensagem', mensagem);
  
  }

  adicionarSala(nomeSala) {
    let newData = this.ref.push();
    
    console.log(newData.key);

    newData.set({
      nome: nomeSala
    });
    return newData;
  }
}

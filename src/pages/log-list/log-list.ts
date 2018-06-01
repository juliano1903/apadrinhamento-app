import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VinculoUsuarios } from '../../modelos/vinculoUsuarios';
import { Interacao } from '../../modelos/interacao';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

/**
 * Generated class for the LogListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-list',
  templateUrl: 'log-list.html',
})
export class LogListPage {

  vinculoUsuario: VinculoUsuarios;
  interacoes: Interacao[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public usuarioService: UsuarioServiceProvider) {

    this.vinculoUsuario = navParams.get("vinculoUsuario");
    this.usuarioService.buscaInteracoes(this.vinculoUsuario)
    .subscribe(
      (interacoes) => {
        console.log(interacoes);
        this.interacoes = interacoes;
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogListPage');
  }

}

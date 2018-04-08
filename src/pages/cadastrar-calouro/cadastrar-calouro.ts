import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

/**
 * Generated class for the CadastrarCalouroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-calouro',
  templateUrl: 'cadastrar-calouro.html',
})
export class CadastrarCalouroPage {


  matriculaUsuario: number;
  nomeUsuario: string;
  senhaUsuario: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _usuarioService: UsuarioServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarCalouroPage');
  }

  cadastrarAluno() {

    let usuario = {
      matricula: this.matriculaUsuario,
      nome: this.nomeUsuario,
      senha: this.senhaUsuario
    };
    
    this._usuarioService.cadastrarAluno(usuario)
      .subscribe(
        (data) => console.log(data),
        (data) => console.log(data)
      );
  }

}

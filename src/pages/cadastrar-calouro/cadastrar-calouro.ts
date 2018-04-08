import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { HomeAlunoPage } from '../home-aluno/home-aluno';

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
  dataMatricula: string = new Date().toISOString();

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
      senha: this.senhaUsuario,
      dataMatricula: this.dataMatricula
    };

    console.log(usuario);

    this._usuarioService.cadastrarAluno(usuario)
      .subscribe(
        (data) => console.log(data),
        (data) => console.log(data)
      );

    this.navCtrl.setRoot(HomeAlunoPage);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { VinculoUsuarios } from '../../modelos/vinculoUsuarios';
import { Usuario } from '../../modelos/usuario';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Interacao } from '../../modelos/interacao';

/**
 * Generated class for the RegistrarInteracaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar-interacao',
  templateUrl: 'registrar-interacao.html',
})
export class RegistrarInteracaoPage {

  data = { titulo:'', descricao:'', dataInteracao: new Date().toISOString(), coordenador: false, aluno: false };

  public vinculoUsuario: VinculoUsuarios;
  public usuarioLogado: Usuario;
  public teste: 'fefef';
  public alunoParticipante = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private usuarioService: UsuarioServiceProvider,
              private _authService: AuthServiceProvider,
              private _alertCtrl: AlertController) {

    this.usuarioLogado = _authService.obtemUsuarioLogado();
    this.usuarioService.vinculoUsuario(this.usuarioLogado.matricula)
      .subscribe(
        (vinculo) => {
          this.vinculoUsuario = JSON.parse(JSON.stringify(vinculo));
          if (this.usuarioLogado.calouro) {
            this.alunoParticipante = vinculo.usuarioVeterano.nome;
          } else {
            this.alunoParticipante = vinculo.usuarioCalouro.nome;
          }
        }
      )         
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarInteracaoPage');
  }

  registrarInteracao() {

    var interacao = new Interacao();
    interacao.titulo = this.data.titulo;
    interacao.descricao = this.data.descricao;
    interacao.data = this.data.dataInteracao;
    interacao.coordenador = this.data.coordenador;

    interacao.preencher(this.vinculoUsuario);

    this.usuarioService.registrarInteracao(interacao)
    .subscribe(
      (interacao) => {
        this._alertCtrl.create({
          title: 'Informação',
          subTitle: 'Interação regitrada com sucesso!',
          buttons: [{
            text: 'Ok'
          }]
        }).present();
      }
    )

    this.navCtrl.pop();
  }

  updateCucumber() {

  }

}

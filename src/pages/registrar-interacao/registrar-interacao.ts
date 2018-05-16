import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { VinculoUsuarios } from '../../modelos/vinculoUsuarios';
import { Usuario } from '../../modelos/usuario';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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

  data = { titulo:'', descricao:'', myDate: '', coordenador: false, aluno: false };

  public vinculoUsuario: VinculoUsuarios;
  public usuarioLogado: Usuario;
  public teste: 'fefef';
  public alunoParticipante = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private usuarioService: UsuarioServiceProvider,
              private _authService: AuthServiceProvider) {

    this.usuarioLogado = _authService.obtemUsuarioLogado();
    this.usuarioService.vinculoUsuario()
      .subscribe(
        (vinculo) => {
          this.vinculoUsuario = vinculo;
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
    console.log(this.data);
    this.navCtrl.pop();
  }

  updateCucumber() {

  }

}

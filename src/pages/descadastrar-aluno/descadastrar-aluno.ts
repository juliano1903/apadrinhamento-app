import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Usuario } from '../../modelos/usuario';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the DescadastrarAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descadastrar-aluno',
  templateUrl: 'descadastrar-aluno.html',
})
export class DescadastrarAlunoPage {

  public usuarioPendente: Usuario[];
  public usuarioLogado: Usuario;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              private usuarioService: UsuarioServiceProvider,
              private _loadingCtrl: LoadingController,
              private _authService: AuthServiceProvider) {

    this.usuarioLogado = _authService.obtemUsuarioLogado();

    let loading = _loadingCtrl.create({
      content: 'Carregando..'
    });

    loading.present();

    this.usuarioService.pendentesVinculacao(this.usuarioLogado.idCurso)
      .subscribe(
        (usuarios) => {
          console.log(usuarios);
          this.usuarioPendente = usuarios;
          loading.dismiss();
        }
      )
  }

  aprovarCadastro(usuario) {

    let loading = this._loadingCtrl.create({
      content: 'Carregando..'
    });

    loading.present();

    this.usuarioService.aprovarCadastro(usuario)
      .subscribe(
      (usuarios) => {
        console.log(usuarios);
        this.atualizarPagina();
        loading.dismiss();
      }
    )
  }

  showPrompt(usuario: Usuario) {
    this.usuarioService.aprovarCadastro(usuario)
    .subscribe(
      (usuarios) => {
        console.log(usuarios);
        this.atualizarPagina();
      }
    )
  }

  atualizarPagina() {
    let paginaAtual: number = this.navCtrl.length() - 1;
    this.navCtrl.push(DescadastrarAlunoPage);
    this.navCtrl.remove(paginaAtual);
  }
}

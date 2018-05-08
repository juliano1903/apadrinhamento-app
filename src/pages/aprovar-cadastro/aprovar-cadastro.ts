import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { Usuario } from '../../modelos/usuario';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { Location } from '@angular/common';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-aprovar-cadastro',
  templateUrl: 'aprovar-cadastro.html',
})
export class AprovarCadastroPage {

  public usuarioPendente: Usuario[];
  public usuarioLogado: Usuario;

  constructor(public navCtrl: NavController,
              public _alertCtrl: AlertController,
              public navParams: NavParams, 
              private usuarioService: UsuarioServiceProvider,
              private _loadingCtrl: LoadingController,
              private _authService: AuthServiceProvider) {

    this.usuarioLogado = _authService.obtemUsuarioLogado();

    let loading = _loadingCtrl.create({
      content: 'Carregando..'
    });

    loading.present();

    this.usuarioService.pendentesAceite(this.usuarioLogado.idCurso)
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
    let prompt = this._alertCtrl.create({
      title: 'Justificativa',
      message: "Insira a justificativa no campo abaixo",
      inputs: [
        {
          name: 'justificativaNegativa',
          placeholder: 'Justificativa'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            usuario.justificativaNegativa = data.justificativaNegativa;
            this.usuarioService.aprovarCadastro(usuario)
              .subscribe(
                (usuarios) => {
                  console.log(usuarios);
                  this.atualizarPagina();
                }
              )
          }
        }
      ]
    });
    prompt.present();
  }

  atualizarPagina() {
    let paginaAtual: number = this.navCtrl.length() - 1;
    this.navCtrl.push(AprovarCadastroPage);
    this.navCtrl.remove(paginaAtual);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AprovarCadastroPage');
  }

}

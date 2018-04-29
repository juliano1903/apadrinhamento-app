import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Usuario } from '../../modelos/usuario';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { VinculoUsuarios } from '../../modelos/vinculoUsuarios';

/**
 * Generated class for the VincularAlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vincular-alunos',
  templateUrl: 'vincular-alunos.html',
})
export class VincularAlunosPage {

  public usuarioPendente: Usuario[];
  public vinculoUsuario = new VinculoUsuarios;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _loadingCtrl: LoadingController,
              private usuarioService: UsuarioServiceProvider,
              private __alertCtrl: AlertController) {

  let loading = _loadingCtrl.create({
    content: 'Carregando..'
  });

  loading.present();

  this.usuarioService.pendentesVinculacao()
    .subscribe(
      (usuarios) => {
        console.log(usuarios);
        this.usuarioPendente = usuarios;
        loading.dismiss();
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VincularAlunosPage');
  }

  aprovarVinculacao(usuario: Usuario) {

    if(usuario.calouro) {
      this.vinculoUsuario.setCalouro(usuario);
    }  else {
      this.vinculoUsuario.setVeterano(usuario);
    }

    let loading = this._loadingCtrl.create({
      content: 'Carregando..'
    });

    loading.present();

    if(this.vinculoUsuario.getCalouro() === undefined || this.vinculoUsuario.getVeterano() === undefined) {

      if(usuario.calouro) {
        this.usuarioService.vateranosPendentesVinculacao()
        .subscribe(
          (usuarios) => {
            console.log(usuarios);
            this.usuarioPendente = usuarios;
            loading.dismiss();
          }
        )
      } else {
        this.usuarioService.calourosPendentesVinculacao()
        .subscribe(
          (usuarios) => {
            console.log(usuarios);
            this.usuarioPendente = usuarios;
            loading.dismiss();
          }
        )
      }
    } else {
      this.usuarioService.vincularAlunos(this.vinculoUsuario)
      .subscribe(
        (usuariosVinculados) => {
          console.log(usuariosVinculados);
          loading.dismiss();
          this.vinculoUsuario.setCalouro(null);
          this.vinculoUsuario.setVeterano(null);
          this.__alertCtrl.create({
            title: 'Vinculo de alunos',
            subTitle: 'Alunos vinculados com sucesso!',
            buttons: [{
              text: 'Ok'
            }]
          }).present();

          this.atualizarPagina();
        }
      )
    }
  }

  atualizarPagina() {
    let paginaAtual: number = this.navCtrl.length() - 1;
    this.navCtrl.push(VincularAlunosPage);
    this.navCtrl.remove(paginaAtual);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Usuario } from '../../modelos/usuario';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { VinculoUsuarios } from '../../modelos/vinculoUsuarios';
import { LogListPage } from '../log-list/log-list';

/**
 * Generated class for the ConsultarLogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultar-logs',
  templateUrl: 'consultar-logs.html',
})
export class ConsultarLogsPage {

  usuarioLogado: Usuario;
  usuariosVinculados: VinculoUsuarios[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthServiceProvider,
              public _loadingCtrl: LoadingController,
              public usuarioService: UsuarioServiceProvider) {
    this.usuarioLogado = authService.obtemUsuarioLogado();

    let loading = _loadingCtrl.create({
      content: 'Carregando..'
    });
  
    loading.present();
  
    this.usuarioService.usuariosVinculados(this.usuarioLogado.idCurso)
      .subscribe(
        (usuarios) => {
          console.log(usuarios);
          this.usuariosVinculados = usuarios;
          loading.dismiss();
      }
    )
  }

  showPrompt(vinculoUsuario) {
    console.log(vinculoUsuario);
    this.navCtrl.push(LogListPage,
      {vinculoUsuario: vinculoUsuario}
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarLogsPage');
  }

}

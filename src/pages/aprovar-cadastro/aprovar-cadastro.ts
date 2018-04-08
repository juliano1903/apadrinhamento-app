import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Usuario } from '../../modelos/usuario';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

@IonicPage()
@Component({
  selector: 'page-aprovar-cadastro',
  templateUrl: 'aprovar-cadastro.html',
})
export class AprovarCadastroPage {

  public usuarioPendente: Usuario[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private usuarioService: UsuarioServiceProvider,
              private _loadingCtrl: LoadingController) {

    let loading = _loadingCtrl.create({
      content: 'Carregando..'
    });

    loading.present();

    this.usuarioService.pendentesAceite()
      .subscribe(
        (usuarios) => {
          console.log(usuarios);
          this.usuarioPendente = usuarios;
          loading.dismiss();
        }
      )
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AprovarCadastroPage');
  }

}

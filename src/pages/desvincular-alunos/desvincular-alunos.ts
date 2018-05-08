import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { Usuario } from '../../modelos/usuario';
import { VinculoUsuarios } from '../../modelos/vinculoUsuarios';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the DesvincularAlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-desvincular-alunos',
  templateUrl: 'desvincular-alunos.html',
})
export class DesvincularAlunosPage {

  private usuarioLogado: Usuario;
  public usuariosVinculados: VinculoUsuarios[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _loadingCtrl: LoadingController,
              private usuarioService: UsuarioServiceProvider,
              private _alertCtrl: AlertController,
              private authService: AuthServiceProvider) {
    
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

  showPrompt(vinculoUsuario: VinculoUsuarios) {
    
    let prompt = this._alertCtrl.create({
      title: 'Mansagem',
      message: "Insira a mensagem no campo abaixo",
      inputs: [
        {
          name: 'mensagem',
          placeholder: 'Mensagem'
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
            
            vinculoUsuario.motivoDesvinculacao = data.mensagem;

            this.usuarioService.desvincularAlunos(vinculoUsuario)
              .subscribe(
                (vinculo) => {
                  console.log(vinculo);
                  this._alertCtrl.create({
                    title: 'Desvincular alunos',
                    subTitle: 'Alunos desvinculados com sucesso!',
                    buttons: [{
                      text: 'Ok'
                    }]
                  }).present();
        
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
    this.navCtrl.push(DesvincularAlunosPage);
    this.navCtrl.remove(paginaAtual);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesvincularAlunosPage');
  }

}

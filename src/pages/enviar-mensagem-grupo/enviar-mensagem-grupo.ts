import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { VinculoUsuarios } from '../../modelos/vinculoUsuarios';
import { Mensagem } from '../../modelos/mensagem';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Usuario } from '../../modelos/usuario';
import { HomePage } from '../home/home';


/**
 * Generated class for the EnviarMensagemGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enviar-mensagem-grupo',
  templateUrl: 'enviar-mensagem-grupo.html',
})
export class EnviarMensagemGrupoPage {

  public usuariosVinculados: VinculoUsuarios[];
  public mensagem = new Mensagem;
  public usuarioLogado: Usuario;
  public usuariosAceitos: Usuario[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _loadingCtrl: LoadingController,
              private usuarioService: UsuarioServiceProvider,
              private _alertCtrl: AlertController,
              private authService: AuthServiceProvider) {
    
    let loading = _loadingCtrl.create({
      content: 'Carregando..'
    });
  
    loading.present();
    
    this.usuarioLogado = authService.obtemUsuarioLogado();

    this.usuarioService.usuariosAceitos(this.usuarioLogado.idCurso)
    .subscribe(
      (usuarios) => {
        console.log(usuarios);
        this.usuariosAceitos = usuarios;
      }
    )

    this.usuarioService.usuariosVinculados(this.usuarioLogado.idCurso)
      .subscribe(
        (usuarios) => {
          console.log(usuarios);
          this.usuariosVinculados = usuarios;
          loading.dismiss();
        }
      )
  }

  acessarSala(keySalaChat) {
    this.navCtrl.setRoot(HomePage, {
      key: keySalaChat,
      nickname: this.usuarioLogado.nome
    });
  }

  showPrompt(vinculoUsuario: VinculoUsuarios) {

    this.mensagem.setUsuarioRemetente(this.usuarioLogado);
    
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
            this.mensagem.setMensagem(data.mensagem)
            this.mensagem.setUsuarioDestinatario(vinculoUsuario.usuarioCalouro);

            this.usuarioService.enviarMensagemGrupo(this.mensagem)
              .subscribe(
                (mensagem) => {
                  console.log(mensagem);
                }
              )

            this.mensagem.setUsuarioDestinatario(vinculoUsuario.usuarioVeterano);

            this.usuarioService.enviarMensagemGrupo(this.mensagem)
              .subscribe(
                (mensagem) => {
                  console.log(mensagem);
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
    this.navCtrl.push(EnviarMensagemGrupoPage);
    this.navCtrl.remove(paginaAtual);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnviarMensagemGrupoPage');
  }

}

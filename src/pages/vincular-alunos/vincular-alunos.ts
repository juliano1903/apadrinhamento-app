import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Usuario } from '../../modelos/usuario';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { VinculoUsuarios } from '../../modelos/vinculoUsuarios';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
  public vinculoUsuario = new VinculoUsuarios();
  public usuarioLogado: Usuario;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _loadingCtrl: LoadingController,
              private usuarioService: UsuarioServiceProvider,
              private __alertCtrl: AlertController,
              private authService: AuthServiceProvider) {

  this.usuarioLogado = authService.obtemUsuarioLogado();

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
        this.usuarioService.vateranosPendentesVinculacao(this.usuarioLogado.idCurso)
        .subscribe(
          (usuarios) => {
            console.log(usuarios);
            this.usuarioPendente = usuarios;
            loading.dismiss();
          }
        )
      } else {
        this.usuarioService.calourosPendentesVinculacao(this.usuarioLogado.idCurso)
        .subscribe(
          (usuarios) => {
            console.log(usuarios);
            this.usuarioPendente = usuarios;
            loading.dismiss();
          }
        )
      }
    } else {

      let nomeSala = this.vinculoUsuario.getCalouro().matricula + '/' + this.vinculoUsuario.getVeterano().matricula;
      let sala = this.usuarioService.adicionarSala(nomeSala);

      let nomeSalaVeteranoCoordenador = this.vinculoUsuario.getVeterano().matricula;
      let salaVeteranoCoordenador = this.usuarioService.adicionarSala(nomeSalaVeteranoCoordenador);

      let nomeSalaCalouroCoordenador = this.vinculoUsuario.getCalouro().matricula;
      let salaCalouroCoordenador = this.usuarioService.adicionarSala(nomeSalaCalouroCoordenador);
      
      this.vinculoUsuario.nomeSalaChat = nomeSala;
      this.vinculoUsuario.keySalaChat = sala.key;
      this.vinculoUsuario.getVeterano().keySalaChatCoordenador = salaVeteranoCoordenador.key;
      this.vinculoUsuario.getCalouro().keySalaChatCoordenador = salaCalouroCoordenador.key;

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

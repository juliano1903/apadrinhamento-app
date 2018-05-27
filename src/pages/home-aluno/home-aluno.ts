import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoProgramaPage } from '../avaliacao-programa/avaliacao-programa';
import { MarcarEncontroPage } from '../marcar-encontro/marcar-encontro';
import { EstruturasUniversidadePage } from '../estruturas-universidade/estruturas-universidade';
import { ProximosEventosPage } from '../proximos-eventos/proximos-eventos';
import { ContatarCoordenadorPage } from '../contatar-coordenador/contatar-coordenador';
import { RegistrarInteracaoPage } from '../registrar-interacao/registrar-interacao';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { EnviarMensagemGrupoPage } from '../enviar-mensagem-grupo/enviar-mensagem-grupo';
import { Usuario } from '../../modelos/usuario';
import { auth } from 'Firebase';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { HomePage } from '../home/home';


/**
 * Generated class for the HomeAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-aluno',
  templateUrl: 'home-aluno.html',
})
export class HomeAlunoPage {

  usuarioLogado: Usuario;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _authService: AuthServiceProvider,
              private usuarioService: UsuarioServiceProvider) {
  
    this.usuarioLogado = _authService.obtemUsuarioLogado();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAlunoPage');
  }

  selecionaAvaliarPrograma() {
    this.navCtrl.push(AvaliacaoProgramaPage);
  }

  selecionaEstruturasUniversidade() {
    this.navCtrl.push(EstruturasUniversidadePage);
  }

  selecionaProximosEventos() {
    this.navCtrl.push(ProximosEventosPage);
  }

  selecionaContatarCoordenador() {
    this.navCtrl.push(ContatarCoordenadorPage);
  }

  selecionaRegistrarInteracao() {
    this.navCtrl.push(RegistrarInteracaoPage);
  }

  selecionaMarcarEncontro() {
    this.navCtrl.push(MarcarEncontroPage);
  }

  selecionarEnviarMensagemGrupo() {
    if(this.usuarioLogado.idTipoUsuario == 1) {
      this.usuarioService.vinculoUsuario()
      .subscribe(
        (usuarios) => {
          console.log(usuarios);
          debugger;
          this.acessarSala(usuarios.keySalaChat);
        }
      )
    } else {
      this.navCtrl.push(EnviarMensagemGrupoPage);
    }
  }

  acessarSala(keySalaChat) {
    this.navCtrl.setRoot(HomePage, {
      key: keySalaChat,
      nickname: this.usuarioLogado.nome
    });
  }

}

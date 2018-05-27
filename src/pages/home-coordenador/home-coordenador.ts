import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DescadastrarAlunoPage } from '../descadastrar-aluno/descadastrar-aluno';
import { CadastrarCalouroPage } from '../cadastrar-calouro/cadastrar-calouro';
import { EnviarMensagemGrupoPage } from '../enviar-mensagem-grupo/enviar-mensagem-grupo';
import { VincularAlunosPage } from '../vincular-alunos/vincular-alunos';
import { DesvincularAlunosPage } from '../desvincular-alunos/desvincular-alunos';
import { ConsultarLogsPage } from '../consultar-logs/consultar-logs';
import { MarcarEncontroPage } from '../marcar-encontro/marcar-encontro';
import { AprovarCadastroPage } from '../aprovar-cadastro/aprovar-cadastro';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the HomeCoordenadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-coordenador',
  templateUrl: 'home-coordenador.html',
})
export class HomeCoordenadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCoordenadorPage');
  }
  
  selecionarDescadastrarAluno() {
    this.navCtrl.push(DescadastrarAlunoPage);
  }

  selecionarCadastrarCalouro() {
    this.navCtrl.push(CadastrarCalouroPage);
  }

  selecionarEnviarMensagemGrupo() {
    this.navCtrl.push(EnviarMensagemGrupoPage);
  }

  selecionarVincularAlunos() {
    this.navCtrl.push(VincularAlunosPage);
  }

  selecionarDesvincularAlunos() {
    this.navCtrl.push(DesvincularAlunosPage);
  }

  selecionarConsultarLogs() {
    this.navCtrl.push(ConsultarLogsPage);
  }

  selecionaMarcarEncontro() {
    this.navCtrl.push(MarcarEncontroPage);
  }

  selecionarAprovarCadastro() {
    this.navCtrl.push(AprovarCadastroPage);
  }
}

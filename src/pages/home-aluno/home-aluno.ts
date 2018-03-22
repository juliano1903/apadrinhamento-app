import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoProgramaPage } from '../avaliacao-programa/avaliacao-programa';
import { MarcarEncontroPage } from '../marcar-encontro/marcar-encontro';
import { EstruturasUniversidadePage } from '../estruturas-universidade/estruturas-universidade';
import { ProximosEventosPage } from '../proximos-eventos/proximos-eventos';
import { ContatarCoordenadorPage } from '../contatar-coordenador/contatar-coordenador';
import { RegistrarInteracaoPage } from '../registrar-interacao/registrar-interacao';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}

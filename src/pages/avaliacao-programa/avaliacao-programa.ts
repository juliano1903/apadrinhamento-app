import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Ionic2RatingModule } from "ionic2-rating";
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { HomeAlunoPage } from '../home-aluno/home-aluno';
import { Avaliacao } from '../../modelos/avaliacao';


/**
 * Generated class for the AvaliacaoProgramaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avaliacao-programa',
  templateUrl: 'avaliacao-programa.html',
})
export class AvaliacaoProgramaPage {

  avaliacao: Avaliacao;
  data = {observacao: ''};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public usuarioService: UsuarioServiceProvider,
              public _loadingCtrl: LoadingController) {
    this.avaliacao = new Avaliacao();
  }

  onModelChange(data) {
    this.avaliacao.avaliacao = data;
  }

  salvarAvaliacao() {

    let loading = this._loadingCtrl.create({
      content : 'salvando...'
    })

    this.usuarioService.salvarAvaliacao(this.avaliacao)
    .subscribe(
      (avaliacao) => {
        this.navCtrl.setRoot(HomeAlunoPage);
        loading.dismiss();
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoProgramaPage');
  }

}

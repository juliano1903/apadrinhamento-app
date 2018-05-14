import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { Evento } from '../../modelos/evento';

/**
 * Generated class for the ProximosEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proximos-eventos',
  templateUrl: 'proximos-eventos.html',
})
export class ProximosEventosPage {

  public proximosEventos: Evento[];

  constructor(public navCtrl: NavController,
              public _alertCtrl: AlertController,
              public navParams: NavParams, 
              private eventoService: EventoServiceProvider,
              private _loadingCtrl: LoadingController) {

    let loading = _loadingCtrl.create({
      content: 'Carregando..'
    });

    loading.present();

    this.eventoService.proximosEventos()
      .subscribe(
        (eventos) => {
          console.log(eventos);
          this.proximosEventos = eventos;
          loading.dismiss();
        }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProximosEventosPage');
  }



}

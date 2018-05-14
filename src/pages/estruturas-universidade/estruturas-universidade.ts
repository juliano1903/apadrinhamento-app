import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { EstruturaServiceProvider } from '../../providers/estrutura-service/estrutura-service';
import { Estrutura } from '../../modelos/estrutura';


/**
 * Generated class for the EstruturasUniversidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estruturas-universidade',
  templateUrl: 'estruturas-universidade.html',
})
export class EstruturasUniversidadePage {

  public estruturas: Estrutura[];

  constructor(public navCtrl: NavController,
              public _alertCtrl: AlertController,
              public navParams: NavParams, 
              private estruturaService: EstruturaServiceProvider,
              private _loadingCtrl: LoadingController) {
    
                let loading = _loadingCtrl.create({
      content: 'Carregando..'
    });

    loading.present();

    
    this.estruturaService.estruturas()
      .subscribe(
        (estruturas) => {
          console.log(estruturas);
          this.estruturas = estruturas;
          loading.dismiss();
        }
      )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstruturasUniversidadePage');
  }

}

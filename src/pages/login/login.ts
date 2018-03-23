import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomeCoordenadorPage } from '../home-coordenador/home-coordenador';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Usuario } from '../../modelos/usuario';
import { HomeAlunoPage } from '../home-aluno/home-aluno';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  matricula : number;
  senha : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private _authService: AuthServiceProvider, private _alertCtrl: AlertController) {
  }

  efetuaLogin(matricula, senha) {

    //    var usuario = this._authService.efetuaLogin(this.matricula, this.senha);

    //código para quando houver um retorno do serviço de login
//    var usuario = this._authService.efetuaLogin(this.matricula, this.senha)
//        .subscribe(
//         (usuario: Usuario) => {
//            this.navCtrl.setRoot(HomeCoordenadorPage);
//          },
//          () => {
//            this._alertCtrl.create({
//              title: "Falha no login",
//              subTitle: "Matricula ou email incorreto, verifique!",
//              buttons: [{ text: "Ok"}]
//            }).present();
//          }
//        )
    console.log(this.matricula);

    if(matricula == '1') {
      this.navCtrl.setRoot(HomeCoordenadorPage);
    } else {
      this.navCtrl.setRoot(HomeAlunoPage);
    }
  }

}

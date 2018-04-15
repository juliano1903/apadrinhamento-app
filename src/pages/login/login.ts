import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomeCoordenadorPage } from '../home-coordenador/home-coordenador';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Usuario } from '../../modelos/usuario';
import { HomeAlunoPage } from '../home-aluno/home-aluno';
import { CadastroPage } from '../cadastro/cadastro';
import { CadastrarCalouroPage } from '../cadastrar-calouro/cadastrar-calouro';


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

  efetuaLogin() {

    let usuario = {
      matricula: this.matricula,
      senha: this.senha
    }

    //código para quando houver um retorno do serviço de login
    this._authService.efetuaLogin(usuario)
        .subscribe(
         (usuario: Usuario) => {
          console.log("Usuario logado: " + usuario.nome);
          if(usuario.idTipoUsuario == 1) {
            this.navCtrl.setRoot(HomeAlunoPage);            
          } else {
            this.navCtrl.setRoot(HomeCoordenadorPage);
          }
        },
          () => {
            this._alertCtrl.create({
              title: "Falha no login",
              subTitle: "Matricula ou senha incorreta, verifique!",
              buttons: [{ text: "Ok"}]
            }).present();
          }
        )
  }

  selecionarCadadastro() {
    this.navCtrl.setRoot(CadastrarCalouroPage);
  }

}

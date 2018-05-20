import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HomeAlunoPage } from '../pages/home-aluno/home-aluno';
import { LoginPage } from '../pages/login/login';
import { VincularAlunosPage } from '../pages/vincular-alunos/vincular-alunos';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAfldsZHB3ga_p_jD7aEEFp-6qOq29bpvw',
  authDomain: 'apadrinhamento-app.firebaseapp.com',
  databaseURL: 'https://apadrinhamento-app.firebaseio.com',
  projectId: 'apadrinhamento-app',
  storageBucket: 'apadrinhamento-app.appspot.com',
  messagingSenderId: '1098282661172'
};

@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = LoginPage;
  @ViewChild(Nav) public nav: Nav;

  public paginas = [
    {titulo: 'Sair', componente: LoginPage.name, icone: 'calendar'}
  ];

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              private authService: AuthServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }

  irParaPagina(componente) {
    this.nav.push(componente);
  }

  get usuarioLogado () {
    return this.authService.obtemUsuarioLogado();
  }
}


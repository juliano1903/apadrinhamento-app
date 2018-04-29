import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HomeAlunoPage } from '../pages/home-aluno/home-aluno';
import { LoginPage } from '../pages/login/login';
import { VincularAlunosPage } from '../pages/vincular-alunos/vincular-alunos';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = LoginPage;

  public paginas = [
    {titulo: 'Agendamentos', pagina: VincularAlunosPage.name, icone: 'calendar'}
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
  }

  get usuarioLogado () {
    return this.authService.obtemUsuarioLogado();
  }
}


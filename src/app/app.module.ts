import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeAlunoPage } from '../pages/home-aluno/home-aluno';
import { HomeCoordenadorPage } from '../pages/home-coordenador/home-coordenador';
import { AvaliacaoProgramaPage } from '../pages/avaliacao-programa/avaliacao-programa';
import { ContatarCoordenadorPage } from '../pages/contatar-coordenador/contatar-coordenador';
import { EstruturasUniversidadePage } from '../pages/estruturas-universidade/estruturas-universidade';
import { MarcarEncontroPage } from '../pages/marcar-encontro/marcar-encontro';
import { ProximosEventosPage } from '../pages/proximos-eventos/proximos-eventos';
import { RegistrarInteracaoPage } from '../pages/registrar-interacao/registrar-interacao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeAlunoPage,
    HomeCoordenadorPage,
    AvaliacaoProgramaPage,
    ContatarCoordenadorPage,
    EstruturasUniversidadePage,
    MarcarEncontroPage,
    ProximosEventosPage,
    RegistrarInteracaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeAlunoPage,
    HomeCoordenadorPage,
    AvaliacaoProgramaPage,
    ContatarCoordenadorPage,
    EstruturasUniversidadePage,
    MarcarEncontroPage,
    ProximosEventosPage,
    RegistrarInteracaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

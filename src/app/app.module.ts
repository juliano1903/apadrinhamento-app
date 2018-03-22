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
import { AprovarCadastroPage } from '../pages/aprovar-cadastro/aprovar-cadastro';
import { DescadastrarAlunoPage } from '../pages/descadastrar-aluno/descadastrar-aluno';
import { CadastrarCalouroPage } from '../pages/cadastrar-calouro/cadastrar-calouro';
import { EnviarMensagemGrupoPage } from '../pages/enviar-mensagem-grupo/enviar-mensagem-grupo';
import { VincularAlunosPage } from '../pages/vincular-alunos/vincular-alunos';
import { DesvincularAlunosPage } from '../pages/desvincular-alunos/desvincular-alunos';
import { ConsultarLogsPage } from '../pages/consultar-logs/consultar-logs';

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
    RegistrarInteracaoPage,
    AprovarCadastroPage,
    DescadastrarAlunoPage,
    CadastrarCalouroPage,
    EnviarMensagemGrupoPage,
    VincularAlunosPage,
    DesvincularAlunosPage,
    ConsultarLogsPage,
    MarcarEncontroPage
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
    RegistrarInteracaoPage,
    AprovarCadastroPage,
    DescadastrarAlunoPage,
    CadastrarCalouroPage,
    EnviarMensagemGrupoPage,
    VincularAlunosPage,
    DesvincularAlunosPage,
    ConsultarLogsPage,
    MarcarEncontroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

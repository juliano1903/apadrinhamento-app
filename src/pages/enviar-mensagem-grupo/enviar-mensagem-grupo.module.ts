import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnviarMensagemGrupoPage } from './enviar-mensagem-grupo';

@NgModule({
  declarations: [
    EnviarMensagemGrupoPage,
  ],
  imports: [
    IonicPageModule.forChild(EnviarMensagemGrupoPage),
  ],
})
export class EnviarMensagemGrupoPageModule {}

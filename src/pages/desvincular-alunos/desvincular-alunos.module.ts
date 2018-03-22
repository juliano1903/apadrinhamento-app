import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesvincularAlunosPage } from './desvincular-alunos';

@NgModule({
  declarations: [
    DesvincularAlunosPage,
  ],
  imports: [
    IonicPageModule.forChild(DesvincularAlunosPage),
  ],
})
export class DesvincularAlunosPageModule {}

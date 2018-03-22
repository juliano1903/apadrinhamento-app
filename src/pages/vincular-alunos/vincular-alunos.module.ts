import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VincularAlunosPage } from './vincular-alunos';

@NgModule({
  declarations: [
    VincularAlunosPage,
  ],
  imports: [
    IonicPageModule.forChild(VincularAlunosPage),
  ],
})
export class VincularAlunosPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescadastrarAlunoPage } from './descadastrar-aluno';

@NgModule({
  declarations: [
    DescadastrarAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(DescadastrarAlunoPage),
  ],
})
export class DescadastrarAlunoPageModule {}

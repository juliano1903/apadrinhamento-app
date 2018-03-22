import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarCalouroPage } from './cadastrar-calouro';

@NgModule({
  declarations: [
    CadastrarCalouroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarCalouroPage),
  ],
})
export class CadastrarCalouroPageModule {}

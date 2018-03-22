import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCoordenadorPage } from './home-coordenador';

@NgModule({
  declarations: [
    HomeCoordenadorPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeCoordenadorPage),
  ],
})
export class HomeCoordenadorPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvaliacaoProgramaPage } from './avaliacao-programa';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    AvaliacaoProgramaPage
  ],
  imports: [
    IonicPageModule.forChild(AvaliacaoProgramaPage),
    Ionic2RatingModule 
  ],
})
export class AvaliacaoProgramaPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProximosEventosPage } from './proximos-eventos';

@NgModule({
  declarations: [
    ProximosEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProximosEventosPage),
  ],
})
export class ProximosEventosPageModule {}

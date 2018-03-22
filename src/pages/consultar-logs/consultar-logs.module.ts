import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarLogsPage } from './consultar-logs';

@NgModule({
  declarations: [
    ConsultarLogsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarLogsPage),
  ],
})
export class ConsultarLogsPageModule {}

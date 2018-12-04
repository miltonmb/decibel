import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAdPage } from './modal-ad';

@NgModule({
  declarations: [
    ModalAdPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAdPage),
  ],
})
export class ModalAdPageModule {}

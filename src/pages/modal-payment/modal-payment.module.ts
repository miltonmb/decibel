import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPaymentPage } from './modal-payment';

@NgModule({
  declarations: [
    ModalPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPaymentPage),
  ],
})
export class ModalPaymentPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalItemsPage } from './modal-items';

@NgModule({
  declarations: [
    ModalItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalItemsPage),
  ],
  exports: [
    ModalItemsPage
  ]
})
export class ModalItemsPageModule {}

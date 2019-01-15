import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalMoviePage } from './modal-movie';

@NgModule({
  declarations: [
    ModalMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalMoviePage),
  ],
  exports: [
    ModalMoviePage
  ]
})
export class ModalMoviePageModule {}

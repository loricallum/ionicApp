import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecieDetailPage } from './specie-detail';

@NgModule({
  declarations: [
    SpecieDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecieDetailPage),
  ],
  exports: [
    SpecieDetailPage
  ]
})
export class SpecieDetailPageModule {}

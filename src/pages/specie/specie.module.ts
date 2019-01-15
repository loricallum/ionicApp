import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeciePage } from './specie';

@NgModule({
  declarations: [
    SpeciePage,
  ],
  imports: [
    IonicPageModule.forChild(SpeciePage),
  ],
  exports: [
    SpeciePage
  ]
})
export class SpeciePageModule {}

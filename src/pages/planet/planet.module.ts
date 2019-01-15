import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanetPage } from './planet';

@NgModule({
  declarations: [
    PlanetPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanetPage),
  ],
  exports: [
    PlanetPage
  ]
})
export class PlanetPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleDetailPage } from './vehicle-detail';

@NgModule({
  declarations: [
    VehicleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleDetailPage),
  ],
  exports: [
    VehicleDetailPage
  ]
})
export class VehicleDetailPageModule {}

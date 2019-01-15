import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-vehicle-detail',
  templateUrl: 'vehicle-detail.html',
})
export class VehicleDetailPage {
  vehicle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider) {
  this.vehicle = navParams.get('vehicle');
  }

}

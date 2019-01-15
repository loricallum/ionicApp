import { VehicleDetailPage } from './../vehicle-detail/vehicle-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-vehicle',
  templateUrl: 'vehicle.html',
})
export class VehiclePage {
  vehicles: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController) {
  this.presentLoading();
    Api.getVehicles().subscribe(data => {
      this.vehicles = data['results'];
    });
  }

   goToVehicleDetail(vehicle) {
    this.navCtrl.push(VehicleDetailPage, { vehicle: vehicle });
  }

    presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 200
    });
    loader.present();
  }

}

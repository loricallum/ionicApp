import { PlanetDetailPage } from './../planet-detail/planet-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-planet',
  templateUrl: 'planet.html',
})
export class PlanetPage {
  planets: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    Api.getPlanets().subscribe(data => {
      this.planets = data['results'];
    });
  }

  goToPlanetDetail(planet) {
    this.navCtrl.push(PlanetDetailPage, { planet: planet });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 200
    });
    loader.present();
  }

}

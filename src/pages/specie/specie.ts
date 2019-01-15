import { SpecieDetailPage } from './../specie-detail/specie-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-specie',
  templateUrl: 'specie.html',
})
export class SpeciePage {
  species: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    Api.getSpecies().subscribe(data => {
      this.species = data['results'];
    });
  }

  goToSpecieDetail(specie) {
    this.navCtrl.push(SpecieDetailPage, { specie: specie });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 200
    });
    loader.present();
  }

}

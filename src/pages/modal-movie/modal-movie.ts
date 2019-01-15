import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-movie',
  templateUrl: 'modal-movie.html',
})
export class ModalMoviePage {
  planets: any;
  species: any;
  starships: any;
  vehicles: any;

  itemsData: Array<any>;

  title: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public api: ApiProvider) {
    this.getItems(navParams.get('data'));
    if (navParams.get('type') == 'planets') {
      // this.getItems(navParams.get('data'));
      this.title = 'Planets in movies';
    } else if (navParams.get('type') == 'species') {
      // this.getItems(navParams.get('data'));
      this.title = 'Species in movies';
    } else if (navParams.get('type') == 'starships') {
      // this.getItems(navParams.get('data'));
      this.title = 'Starships in movies';
    } else {
      // this.getItems(navParams.get('data'));
      this.title = 'Vehicles in movies';
    }

  }

  getItems(items) {
    for (let item of items) {
      this.api.getItems(item).subscribe(data => {
        this.itemsData = this.itemsData + data;
      });
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-specie-detail',
  templateUrl: 'specie-detail.html',
})
export class SpecieDetailPage {
  specie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.specie = navParams.get('specie');
  }


}

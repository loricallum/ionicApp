import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-items',
  templateUrl: 'modal-items.html',
})
export class ModalItemsPage {
  items: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = navParams.get('items');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalItemsPage');
  }

}

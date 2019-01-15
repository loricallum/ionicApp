import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-people-detail',
  templateUrl: 'people-detail.html',
})
export class PeopleDetailPage {
  people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.people = navParams.get('people');
  }


}

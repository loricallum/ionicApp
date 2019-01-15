import { ModalMoviePage } from './../modal-movie/modal-movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.movie = navParams.get('movie');

  }

  presentModal(data, type) {
    let modal = this.modalCtrl.create(ModalMoviePage, {data: data, type:type});
    modal.present();
  }

}

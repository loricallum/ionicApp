import { MovieDetailPage } from './../movie-detail/movie-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider} from './../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {

  movies: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    Api.getMovies().subscribe(data => {
      this.movies = data['results'];
      console.log(this.movies);
    });
  }

  goToMovieDetail(movie) {
    this.navCtrl.push(MovieDetailPage, { movie: movie });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 200
    });
    loader.present();
  }

}

import { ModalMoviePage } from './../pages/modal-movie/modal-movie';
import { PeoplePage } from './../pages/people/people';
import { SpeciePage } from './../pages/specie/specie';
import { VehiclePage } from './../pages/vehicle/vehicle';
import { PlanetPage } from './../pages/planet/planet';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MoviePage } from './../pages/movie/movie';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MoviePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Movies', component: MoviePage },
      { title: 'Planets', component: PlanetPage },
      { title: 'Vehicles', component: VehiclePage },
      { title: 'People', component: PeoplePage },
      { title: 'Species', component: SpeciePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    
    this.nav.setRoot(page.component);
  }
}

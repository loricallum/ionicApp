import { ModalMoviePage } from './../pages/modal-movie/modal-movie';
import { SpecieDetailPage } from './../pages/specie-detail/specie-detail';
import { SpeciePage } from './../pages/specie/specie';
import { PeopleDetailPage } from './../pages/people-detail/people-detail';
import { PeoplePage } from './../pages/people/people';
import { VehicleDetailPage } from './../pages/vehicle-detail/vehicle-detail';
import { VehiclePage } from './../pages/vehicle/vehicle';
import { PlanetDetailPage } from './../pages/planet-detail/planet-detail';
import { PlanetPage } from './../pages/planet/planet';
import { MovieDetailPage } from './../pages/movie-detail/movie-detail';
import { MoviePage } from './../pages/movie/movie';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MoviePage,
    MovieDetailPage,
    PlanetPage,
    PlanetDetailPage,
    VehiclePage,
    VehicleDetailPage,
    PeoplePage,
    PeopleDetailPage,
    SpeciePage,
    SpecieDetailPage,
    ModalMoviePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MoviePage,
    MovieDetailPage,
    PlanetPage,
    PlanetDetailPage,
    VehiclePage,
    VehicleDetailPage,
    PeoplePage,
    PeopleDetailPage,
    SpeciePage,
    SpecieDetailPage,
    ModalMoviePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}

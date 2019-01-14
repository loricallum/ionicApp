import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {PeopleService} from '../../providers/people-service/people-service';
import { SwapiProvider } from '../../providers/swapi/swapi';

@IonicPage({
  templateUrl: 'build/pages/home/home.html',
  providers: [PeopleService]
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
//Here i have added where i want the API to load. LL
export class HomePage {
  public people: any;
  films = [];
  last = {
    episode_id: 8,
    title: 'The last Jedi'
  }

  constructor(public navCtrl: NavController,
    public swapi: SwapiProvider,
    public menu: MenuController) {
      menu.swipeEnable(true, 'menu');
      this.loadData();
    }

  loadData() {
    this.swapi.getFilms().subscribe(data => {
      this.films = data.results;
      this.films.push(this.last);
    });
  }

  viewFilmDetail(film) {
    this.navCtrl.push('FilmDetailPage', film);
  }

  getCover(id){
    return `url(assets/img/scenes/episode_${id}.jpg)`;
  }

}
//Here i have added a constructor, created people property and imported PeopleService. LL
  constructor(public peopleService: PeopleService){
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load()
    .then(data => {
      this.people = data;
    });
  }
}

//Here i have a constructor for the login page. LL
export class HomePage {
  username = '';
  email = '';
  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
}
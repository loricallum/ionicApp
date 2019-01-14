import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PeopleServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PeopleServiceProvider Provider');
  }

}

load() {
  if (this.data) {
    
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
  this.http.get('https://swapi.co/api/people/')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.people;
        resolve(this.data);
      });
  });
}
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MediasService {

  //baseUrl = 'http://localhost:3000/items';
  baseUrl = '../../assets/items.json';
  constructor(private http: Http) { }


  getMediaItems(){
    return this.http.get(this.baseUrl)
      //.do(console.log)
      .map(res => res.json().items);
  }

}

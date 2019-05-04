import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicLoadService {

  constructor(private http: HttpClient) { }

  // get all comics collection
  getComicsCoolection(limit:number,page: number) {
    // call marvel api
    let offset:number=(page*limit-limit);
    return this.http.get(`http://gateway.marvel.com/v1/public/comics?limit=${limit}&offset=${page == 1 ? offset: offset + 1}&ts=1556534059282&apikey=e0ac6a5dfc5a2c66cab03e0e59442660&hash=3d8b325e458484690435d17cbf4e35af`);
  }

  // get comic by id
  getComicById(id: number) {
    //call marvel api
    return this.http.get(`http://gateway.marvel.com/v1/public/comics/${id}?ts=1556534059282&apikey=e0ac6a5dfc5a2c66cab03e0e59442660&hash=3d8b325e458484690435d17cbf4e35af`);

  }
}

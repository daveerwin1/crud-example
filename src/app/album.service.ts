import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  uri = 'http://localhost:4000/albums';

  constructor(private http: HttpClient) { }

  addAlbum(album_title) {
    const obj = {
      album_title: album_title
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getAlbums() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editAlbum(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateAlbum(album_title, id) {

    const obj = {
      album_title: album_title,
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteAlbum(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
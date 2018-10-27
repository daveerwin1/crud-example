import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

import { FormGroup, FormBuilder } from '@angular/forms';

import { Album } from './album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  albums: Album[];
  angForm: FormGroup;

  constructor(
    private albumservice: AlbumService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      album_title: '',
    });
  }

  addAlbum(album_title) {
    this.albumservice.addAlbum(album_title);
  }

  deleteAlbum(id) {
    this.albumservice.deleteAlbum(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.albumservice.getAlbums()
      .subscribe((data: Album[]) => {
        this.albums = data;
      });
  }
}

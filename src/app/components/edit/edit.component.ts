import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { Album } from '../../album';
import { AlbumService } from '../../album.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  album: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private albumservice: AlbumService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
             album_title: '',
         });
      }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.albumservice.editAlbum(params['id']).subscribe(res => {
          this.album = res;
      });
    });
  }

  updateAlbum(album_title) {
    this.route.params.subscribe(params => {
       this.albumservice.updateAlbum(album_title, params['id']);
       this.router.navigate(['']);
    });
  }
}

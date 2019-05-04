import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ComicLoadService } from '../../service/comic-load.service';
// import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';
import {AuthService} from '../../service/auth.service';


@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {
  comicId: number;
  comics:string;

  constructor(private comicService: ComicLoadService,
    private router: Router,
    // private spinner: NgxSpinnerService,
    private _location: Location,
    private auth:AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  //   //loader work
  //   this.spinner.show();
  //   setTimeout(() => {
  //     /** spinner ends after 5 seconds */
  //     this.spinner.hide();
  // }, 1500);

  
    //get parms
    this.route
      .queryParams
      .subscribe(params => {
        this.comicId = (params['comicId']);
      });
    if (this.comicId) {
      this.getComicById(this.comicId);
    }
  }

  //get comic ddata by id
  getComicById(id: number) {
    this.comicService.getComicById(id).subscribe(
      res => {
        //check ststus is ok
        if (res['code'] == 200 && res['status'] == 'Ok') {
          this.comics = (res['data']['results']);
          console.log(this.comics);
        }
      }
    );
  }

  // go to collection page
  goBack(){
    this._location.back();
  }



}

import { Component, OnInit } from '@angular/core';
import { ComicLoadService } from '../../service/comic-load.service';
import { Router } from '@angular/router';
import {AuthService} from '../../service/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  allComics = [];
  page: number = 1;
  limit:number=9;


  constructor(private comicServise: ComicLoadService,
     private router: Router,
     private auth:AuthService
     ) { }

  ngOnInit() {
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 40) {
          $('nav').addClass('fixed-header');
          $('nav div').addClass('visible-title');
      }
      else {
          $('nav').removeClass('fixed-header');
          $('nav div').removeClass('visible-title');
      }
  });
  
    this.getComics();
  }
  //get comic collection
  getComics() {
    this.comicServise.getComicsCoolection(this.limit,this.page).subscribe(
      res => {
        //check ststus is ok
        if (res['code'] == 200 && res['status'] == 'Ok') {
          this.allComics =this.allComics.concat(((res['data']['results'])));
        }
      }
    );
  }

  // go to product detail page
  goToProdictDetails(id: number) {
    this.router.navigate(['comic-detail'], { queryParams: { comicId: id } });
    // ,skipLocationChange: true 
  }

  // on scroll down increse product limit
  onScroll() {
    this.page = this.page + 1;
    this.getComics();
  }

}

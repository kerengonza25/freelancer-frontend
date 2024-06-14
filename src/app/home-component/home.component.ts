import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NguCarouselConfig } from '@ngu/carousel';
import { PublicacionService } from '../services/publicacion.service';
import { Publicacion } from '../model/publicacion.entity';
import { AuthServiceService } from '../services/authService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publicaciones : Publicacion[] = [];


  faSearch = faMagnifyingGlass;

  imgags = [
    'assets/bg.jpg',
    'assets/car.png',
    'assets/canberra.jpg',
    'assets/holi.jpg'
  ];
  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
  public carouselTiles : any = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, xl: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  constructor(private publicacionService: PublicacionService, public authService: AuthServiceService, private router: Router) { }

  ngOnInit() {

    if (this.authService.isLoggedIn()) {
      console.log('Usuario logeado');
    } else {
      console.log('Usuario no logeado');
      this.router.navigate(['/login']);
    }

    this.publicacionService.searchEntities({ 'filter.estado': 'A', limit: '6'}).subscribe((data) => {
      this.publicaciones = data.data;
     });


    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });
  }

  public carouselTileLoad(j2: string | number) {
    // console.log(this.carouselTiles[j]);
    const len = this.carouselTiles[j2].length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTiles[j2].push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }



}

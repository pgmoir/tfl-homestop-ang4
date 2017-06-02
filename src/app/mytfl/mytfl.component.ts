import { MytflService } from './mytfl.service';
import { Favourite } from './../shared/favourites.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytfl',
  templateUrl: './mytfl.component.html',
  styleUrls: ['./mytfl.component.css']
})
export class MytflComponent implements OnInit {

  favourites: Favourite[];

  constructor(private mytflService: MytflService) { }

  ngOnInit() {
    this.favourites = this.mytflService.getFavourites();
    this.mytflService.favouritesChanged.subscribe(
      (favourites: Favourite[]) => {
        this.favourites = favourites;
      }
    );
  }
}

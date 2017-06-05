import { Subscription } from 'rxjs/Subscription';
import { MytflService } from './mytfl.service';
import { Favourite } from './../shared/favourites.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mytfl',
  templateUrl: './mytfl.component.html',
  styleUrls: ['./mytfl.component.css']
})
export class MytflComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  favourites: Favourite[];

  constructor(private mytflService: MytflService) { }

  ngOnInit() {
    this.favourites = this.mytflService.getFavourites();
    this.subscription = this.mytflService.favouritesChanged.subscribe(
      (favourites: Favourite[]) => {
        this.favourites = favourites;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Favourite } from './../shared/favourites.model';
import { EventEmitter } from '@angular/core';

export class MytflService {

  favouritesChanged = new EventEmitter<Favourite[]>();

  private favourites: Favourite[] = [
    new Favourite('Central', 'tube'),
    new Favourite('Bakerloo', 'tube')
  ];

  getFavourites() {
    return this.favourites.slice();
  }

  addFavourite(favourite: Favourite) {
    this.favourites.push(favourite);
    this.favouritesChanged.emit(this.favourites.slice());
  }

  addFavourites(favourites: Favourite[]) {
    this.favourites.push(...favourites);
    this.favouritesChanged.emit(this.favourites.slice());
  }
}

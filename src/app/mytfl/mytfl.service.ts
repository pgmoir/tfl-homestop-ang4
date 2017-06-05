import { Favourite } from './../shared/favourites.model';
import { EventEmitter } from '@angular/core';

export class MytflService {

  favouritesChanged = new EventEmitter<Favourite[]>();

  private favourites: Favourite[] = [];

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

  deleteFavourite(name: string, mode: string) {
      for (let i = this.favourites.length - 1; i >= 0; i--) {
      console.log(this.favourites[i].name + ' ' + this.favourites[i].style + ' ' + this.favourites[i].mode);
      if (this.favourites[i].name === name && this.favourites[i].mode === mode) {
        console.log('deleting favourite: ' + name + ' ' + mode)
        this.favourites.splice(i, 1);
      }
    }
  }
}

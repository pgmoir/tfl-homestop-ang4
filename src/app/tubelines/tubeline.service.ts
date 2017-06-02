import { Favourite } from './../shared/favourites.model';
import { MytflService } from './../mytfl/mytfl.service';
import { EventEmitter, Injectable } from '@angular/core';

import { Tubeline } from './tubeline.model';

@Injectable()

export class TubelineService {

  selected = new EventEmitter<Tubeline>();

  private tubelines: Tubeline[] = [
    new Tubeline('Bakerloo', 'bakerloo'),
    new Tubeline('Central', 'central'),
    new Tubeline('Circle', 'circle'),
    new Tubeline('District', 'district')
  ];

  constructor(private mytflService: MytflService) {}

  getTubelines() {
    return this.tubelines.slice();
  }

  addToFavourites(tubeline: Tubeline) {
    this.mytflService.addFavourite(new Favourite(tubeline.name, 'tube'));
  }
}

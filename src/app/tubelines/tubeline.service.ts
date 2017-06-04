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
    new Tubeline('District', 'district'),
    new Tubeline('Jubilee', 'jubilee')
  ];

  constructor(private mytflService: MytflService) {}

  getTubeline(name: string) {
    // console.log('getTubeline ' + name);
    const tubeline = this.tubelines.find(
      (s) => {
        return s.name === name;
      }
    );
    return tubeline;
  }

  getTubelines() {
    return this.tubelines.slice();
  }

  addToFavourites(tubeline: Tubeline) {
    this.mytflService.addFavourite(new Favourite(tubeline.name, 'tube', tubeline.style));
  }

  updateTubeline(name: string, style: string) {
    console.log('Change to ' + name + ' ' + style);
    for (let i = 0; i < this.tubelines.length; i++) {
      if (this.tubelines[i].name === name) {
        this.tubelines[i].style = style;
      }
      console.log(this.tubelines[i].name + ' ' + this.tubelines[i].style);
    }
  }
}

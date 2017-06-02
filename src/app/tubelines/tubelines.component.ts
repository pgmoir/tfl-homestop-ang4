import { Component, OnInit } from '@angular/core';

import { Tubeline } from './tubeline.model';
import { TubelineService } from './tubeline.service';

@Component({
  selector: 'app-tubelines',
  templateUrl: './tubelines.component.html',
  styleUrls: ['./tubelines.component.css'],
  providers: [TubelineService]
})
export class TubelinesComponent implements OnInit {

  selected: Tubeline;

  constructor(private tubelineService: TubelineService) { }

  ngOnInit() {
    this.tubelineService.selected.subscribe(
      (tubeline: Tubeline) => {
        this.selected = tubeline;
      }
    );
  }

}

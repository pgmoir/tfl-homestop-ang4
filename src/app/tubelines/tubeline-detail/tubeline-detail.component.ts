import { Component, OnInit, Input } from '@angular/core';

import { Tubeline } from './../tubeline.model';
import { TubelineService } from './../tubeline.service';

@Component({
  selector: 'app-tubeline-detail',
  templateUrl: './tubeline-detail.component.html',
  styleUrls: ['./tubeline-detail.component.css']
})
export class TubelineDetailComponent implements OnInit {
  @Input() tubeline: Tubeline;

  constructor(private tubelineService: TubelineService) { }

  ngOnInit() {

  }

  onAddToFavourites() {
    this.tubelineService.addToFavourites(this.tubeline);
  }

}

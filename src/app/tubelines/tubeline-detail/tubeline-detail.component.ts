import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private tubelineService: TubelineService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tubeline = new Tubeline(this.route.snapshot.params['name'], this.route.snapshot.params['style']);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.tubeline = new Tubeline(params['name'], params['style']);
        }
      );
  }

  onAddToFavourites() {
    this.tubelineService.addToFavourites(this.tubeline);
  }

}

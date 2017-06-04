import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Tubeline } from './tubeline.model';
import { TubelineService } from './tubeline.service';

@Component({
  selector: 'app-tubelines',
  templateUrl: './tubelines.component.html',
  styleUrls: ['./tubelines.component.css']
})
export class TubelinesComponent implements OnInit {

  selected: Tubeline;

  constructor(private tubelineService: TubelineService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.tubelineService.selected.subscribe(
      (tubeline: Tubeline) => {
        this.selected = tubeline;
      }
    );
  }

  reloadTubelines() {
    //this.router.navigate(['tubelines'], {relativeTo: this.route });
  }

}

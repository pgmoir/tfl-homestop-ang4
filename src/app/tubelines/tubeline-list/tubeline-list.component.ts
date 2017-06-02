import { Tubeline } from './../tubeline.model';
import { Component, OnInit } from '@angular/core';

import { TubelineService } from './../tubeline.service';

@Component({
  selector: 'app-tubeline-list',
  templateUrl: './tubeline-list.component.html',
  styleUrls: ['./tubeline-list.component.css']
})
export class TubelineListComponent implements OnInit {
  tubelines: Tubeline[];

  constructor(private tubelineService: TubelineService) { }

  ngOnInit() {
    this.tubelines = this.tubelineService.getTubelines();
  }

}

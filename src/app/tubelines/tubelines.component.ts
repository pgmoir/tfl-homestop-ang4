import { Component, OnInit } from '@angular/core';

import { Tubeline } from './tubeline.model';

@Component({
  selector: 'app-tubelines',
  templateUrl: './tubelines.component.html',
  styleUrls: ['./tubelines.component.css']
})
export class TubelinesComponent implements OnInit {

  tubelines: Tubeline[] = [
    new Tubeline('Bakerloo', 'bakerloo'),
    new Tubeline('Central', 'central'),
    new Tubeline('Circle', 'circle'),
    new Tubeline('District', 'district')
  ];

  constructor() { }

  ngOnInit() {
  }

}

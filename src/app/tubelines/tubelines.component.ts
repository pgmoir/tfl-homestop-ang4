import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tubelines',
  templateUrl: './tubelines.component.html',
  styleUrls: ['./tubelines.component.css']
})
export class TubelinesComponent implements OnInit {

  tubelines = [
    { name: 'Bakerloo' },
    { name: 'Central' },
    { name: 'Circle' },
    { name: 'District' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Tubeline } from './../../tubeline.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tubeline-item',
  templateUrl: './tubeline-item.component.html',
  styleUrls: ['./tubeline-item.component.css']
})
export class TubelineItemComponent implements OnInit {

  @Input() tubeline: Tubeline;

  constructor() { }

  ngOnInit() {
  }
}

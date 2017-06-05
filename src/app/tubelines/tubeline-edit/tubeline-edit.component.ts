import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Router, ActivatedRoute, CanDeactivate, Params } from '@angular/router';
import { Tubeline } from './../tubeline.model';
import { TubelineService } from './../tubeline.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tubeline-edit',
  templateUrl: './tubeline-edit.component.html',
  styleUrls: ['./tubeline-edit.component.css']
})
export class TubelineEditComponent implements OnInit, CanComponentDeactivate {

  tubeline: Tubeline;
  name = '';
  style = '';
  changesSaved = false;
  editMode = false;

  constructor(private tubelineService: TubelineService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.tubeline = this.tubelineService.getTubeline(params['name']);
          this.name = this.tubeline.name;
          this.style = this.tubeline.style;
        }
      );
    // this.tubeline = new Tubeline('Jubilee', 'jubilee');
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.name !== this.tubeline.name || this.style !== this.tubeline.style) &&
      !this.changesSaved) {
        return confirm('Do you want to discard the changes?');
      } else {
        return true;
      }
  }

  onUpdateTubeline() {
    this.tubelineService.updateTubeline(this.name, this.style);
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}

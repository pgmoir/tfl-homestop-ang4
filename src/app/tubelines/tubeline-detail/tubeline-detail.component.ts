import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Tubeline } from './../tubeline.model';
import { TubelineService } from './../tubeline.service';

@Component({
  selector: 'app-tubeline-detail',
  templateUrl: './tubeline-detail.component.html',
  styleUrls: ['./tubeline-detail.component.css']
})
export class TubelineDetailComponent implements OnInit, OnDestroy {
  @Input() tubeline: Tubeline;
  paramsSubscription: Subscription;

  constructor(private tubelineService: TubelineService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.tubeline = new Tubeline(this.route.snapshot.params['name'], this.route.snapshot.params['style']);
    // // console.log(this.route.snapshot.queryParams);
    // // console.log(this.route.snapshot.fragment);
    // // this.route.queryParams.subscribe();
    // // this.route.fragment.subscribe();
    // this.paramsSubscription = this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.tubeline = new Tubeline(params['name'], params['style']);
    //     }
    //   );
    // console.log('here at tubeline detail');
    this.route.data
      .subscribe(
        (data: Data) => this.tubeline = data['tubeline']
      );
  }

  ngOnDestroy() {
    // this.paramsSubscription.unsubscribe();
  }

  onAddToFavourites() {
    this.tubelineService.addToFavourites(this.tubeline);
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  onDeleteFromFavourites() {
    this.tubelineService.deleteFromFavourites(this.tubeline);
  }

}

import { TubelineService } from './../tubeline.service';
import { Tubeline } from './../tubeline.model';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class TubelineResolver implements Resolve<Tubeline> {

    constructor(private tubelineService: TubelineService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tubeline> | Promise<Tubeline> | Tubeline {
        // console.log('resolve ' + route);
        // console.log('resolve params ' + route.params['name']);
        return this.tubelineService.getTubeline(route.params['name']);
    }
}

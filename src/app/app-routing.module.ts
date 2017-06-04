import { TubelineResolver } from './tubelines/tubeline-detail/tubeline-resolver.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CanDeactivateGuard } from './tubelines/tubeline-edit/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MytflComponent } from './mytfl/mytfl.component';
import { RaillinesComponent } from './raillines/raillines.component';
import { CablecarsComponent } from './cablecars/cablecars.component';
import { RiverroutesComponent } from './riverroutes/riverroutes.component';
import { RoadsComponent } from './roads/roads.component';
import { BusroutesComponent } from './busroutes/busroutes.component';
import { TubelineEditComponent } from './tubelines/tubeline-edit/tubeline-edit.component';
import { TubelineDetailComponent } from './tubelines/tubeline-detail/tubeline-detail.component';
import { TubelinesComponent } from './tubelines/tubelines.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tube', canActivateChild: [AuthGuard], component: TubelinesComponent, children: [
    { path: ':name/:style', component: TubelineDetailComponent, resolve: {tubeline: TubelineResolver} },
    { path: ':name/:style/edit', component: TubelineEditComponent, canDeactivate: [CanDeactivateGuard] }
  ] },
  { path: 'bus', component: BusroutesComponent },
  { path: 'road', component: RoadsComponent },
  { path: 'river', component: RiverroutesComponent },
  { path: 'cablecar', component: CablecarsComponent },
  { path: 'rail', component: RaillinesComponent },
  { path: 'mytfl', component: MytflComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  // { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true})
      RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

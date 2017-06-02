import { MytflService } from './mytfl/mytfl.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TubelinesComponent } from './tubelines/tubelines.component';
import { HeaderComponent } from './shared/header/header.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { BusroutesComponent } from './busroutes/busroutes.component';
import { RoadsComponent } from './roads/roads.component';
import { RiverroutesComponent } from './riverroutes/riverroutes.component';
import { CablecarsComponent } from './cablecars/cablecars.component';
import { RaillinesComponent } from './raillines/raillines.component';
import { TubelineListComponent } from './tubelines/tubeline-list/tubeline-list.component';
import { TubelineDetailComponent } from './tubelines/tubeline-detail/tubeline-detail.component';
import { TubelineItemComponent } from './tubelines/tubeline-list/tubeline-item/tubeline-item.component';
import { MytflComponent } from './mytfl/mytfl.component';

@NgModule({
  declarations: [
    AppComponent,
    TubelinesComponent,
    HeaderComponent,
    DropDownDirective,
    BusroutesComponent,
    RoadsComponent,
    RiverroutesComponent,
    CablecarsComponent,
    RaillinesComponent,
    TubelineListComponent,
    TubelineDetailComponent,
    TubelineItemComponent,
    MytflComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MytflService],
  bootstrap: [AppComponent]
})
export class AppModule { }

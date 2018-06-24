import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatInputModule, MatFormFieldModule, MatCardModule} from '@angular/material';
import { AppComponent } from './app.component';
import { PlacesfilterComponent } from './placesfilter/placesfilter.component';
import { PlaceslistComponent } from './placeslist/placeslist.component';
import { PlacecardComponent } from './placecard/placecard.component';
import { PlacesfilterPipe } from './placesfilt.pipe';
import { TemperatureComponent } from './temperature/temperature.component';
import { TeddyComponent } from './teddy/teddy.component';
import { HttpClientModule } from '@angular/common/http';
import { PlacesService } from './places.service';

@NgModule({
  declarations: [
    AppComponent,
    PlacesfilterComponent,
    PlaceslistComponent,
    PlacecardComponent,
    PlacesfilterPipe,
    TemperatureComponent,
    TeddyComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatCardModule,
    HttpClientModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

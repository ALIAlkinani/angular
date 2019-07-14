import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// add these imports
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HarborWeatherComponent } from './harbor-weather/harbor-weather.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    HarborWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'your google map key'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';
import { WeatherIteamComponent } from './weather-iteam/weather-iteam.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherlistComponent,
    WeatherIteamComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

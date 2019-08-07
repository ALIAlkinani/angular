import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ReadCardComponent } from './read-card/read-card.component';

import { FillModeComponent } from './fill-mode/fill-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ReadCardComponent,
    FillModeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

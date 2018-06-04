import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameCardListComponent } from './game-card-list/game-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    GameCardListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

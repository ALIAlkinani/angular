import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  template: `<div><h1> {{title}} </h1>
                <h3>My favorite Hero : {{myHero.name}}</h3>
  <p>Heroes</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{hero.name}}
    </li>
  </ul>
  <p *ngIf="heroes.length > 6"> There are more than Three heroes</p></div>` ,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heroes = [
    new Hero(1, 'Ali'),
    new Hero(2, 'Sarah'),
    new Hero(3, 'Mohammad'),
    new Hero(4, 'Magneta'),
    new Hero(5, 'Jones')
  ];
  title = 'displaying-data';

  myHero = this.heroes[0];
}

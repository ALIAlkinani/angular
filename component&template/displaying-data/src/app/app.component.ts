import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> {{title}} </h1>
                <h3>My favorite Hero : {{myHero}}</h3>` ,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'displaying-data';
  myHero = 'Ali Alkinani' ;
}

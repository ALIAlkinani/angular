import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero',
  template: `
    <p>
      hero works!
    </p>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}

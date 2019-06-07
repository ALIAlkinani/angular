import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
heroes: Hero[] = []
  constructor(private heroServices: HeroService) { }

  ngOnInit() {
  this.getHeroes();
  }
  getHeroes(): void {
  this.heroServices.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

}

import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
   heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
        // ToDO wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ToDo ignore new term if same as previous term
        distinctUntilChanged(),
        // ToDO switch to new search observable each time the term changes
        switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
// push a search term to observable stream
    search(term: string): void {
        this.searchTerms.next(term);
    }
}

import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-developer-search',
  templateUrl: './developer-search.component.html',
  styleUrls: [ './developer-search.component.css' ]
})
export class DeveloperSearchComponent implements OnInit {
  developers$: Observable<Developer[]>;
  private searchTerms = new Subject<string>();

  constructor(private developerService: DeveloperService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.developers$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.developerService.searchDeveloper(term)),
    );
  }
}
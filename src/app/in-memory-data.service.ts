import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const developers = [
      { id: 21, name: 'Jaz'},
      { id: 22, name: 'Sean'},
      { id: 23, name: 'Christian'},
      { id: 24, name: 'Mary'},
      { id: 25, name: 'Cindy'},
      { id: 26, name: 'Denise'},
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {developers};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(developers: Developer[]): number {
    return developers.length > 0 ? Math.max(...developers.map(developer => developer.id)) + 1 : 11;
  }
}
import { Heroes } from './heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Label } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Label[]> {
    return of(Heroes);
  }
}

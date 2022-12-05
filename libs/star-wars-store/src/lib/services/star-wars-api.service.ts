import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResult } from '../models/people-result.model';

@Injectable({
  providedIn: 'root',
})
export class StarWarsApiService {
  readonly #serviceRoot = 'https://swapi.dev/api';
  readonly #httpClient = inject(HttpClient);

  getPeople(): Observable<PeopleResult> {
    return this.#httpClient.get<PeopleResult>(Location.joinWithSlash(this.#serviceRoot, 'people'));
  }
}

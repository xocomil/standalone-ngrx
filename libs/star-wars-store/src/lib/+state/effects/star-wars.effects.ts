import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { StarWarsApiService } from '../../services/star-wars-api.service';
import { StarWarsActions } from '../star-wars.actions';

@Injectable()
export class StarWarsEffects {
  readonly #starWarsApiService = inject(StarWarsApiService);

  loadStarWars$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StarWarsActions.load),
      exhaustMap(() =>
        this.#starWarsApiService.getPeople().pipe(
          map((peopleResult) => StarWarsActions.loadSuccess(peopleResult)),
          catchError((error) => of(StarWarsActions.loadFailure({ errorMessage: error })))
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}

import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PeopleResult } from '../models/people-result.model';

export const StarWarsActions = createActionGroup({
  source: 'Star Wars',
  events: {
    Load: emptyProps(),
    'Load Success': props<PeopleResult>(),
    'Load Failure': props<{ errorMessage: string }>(),
  },
});

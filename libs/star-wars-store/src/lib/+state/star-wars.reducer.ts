import { createFeature, createReducer, on } from '@ngrx/store';
import { emptyPeopleResult, PeopleResult } from '../models/people-result.model';
import { StarWarsActions } from './star-wars.actions';

export type State = {
  people: PeopleResult;
  loadPeople: {
    loading: boolean;
    success: boolean;
    error: string | null;
  };
};

export const initialState: State = {
  people: emptyPeopleResult(),
  loadPeople: {
    loading: false,
    success: false,
    error: null,
  },
};

const reducer = createReducer(
  initialState,

  on(StarWarsActions.load, (state): State => ({ ...state, loadPeople: { ...state.loadPeople, loading: true } })),
  on(
    StarWarsActions.loadSuccess,
    (state, action): State => ({ ...state, people: action, loadPeople: { loading: false, success: true, error: null } })
  ),
  on(
    StarWarsActions.loadFailure,
    (state, action): State => ({
      ...state,
      people: emptyPeopleResult(),
      loadPeople: { loading: false, success: false, error: action.errorMessage },
    })
  )
);

export const starWarsFeature = createFeature({ name: 'starWarsFeature', reducer });

export const { selectPeople, selectLoadPeople } = starWarsFeature;

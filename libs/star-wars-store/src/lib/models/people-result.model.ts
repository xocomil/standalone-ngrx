import { PersonResult } from './person-result.model';

export type PeopleResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PersonResult[];
};

export const emptyPeopleResult = (): PeopleResult => ({
  count: 0,
  next: null,
  previous: null,
  results: [],
});

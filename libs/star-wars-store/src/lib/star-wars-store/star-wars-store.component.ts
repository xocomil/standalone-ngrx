import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PushModule } from '@ngrx/component';
import { Store, StoreModule } from '@ngrx/store';
import { StarWarsActions } from '../+state/star-wars.actions';
import { selectPeople } from '../+state/star-wars.reducer';

@Component({
  selector: 'standalone-ngrx-star-wars-store',
  standalone: true,
  imports: [CommonModule, PushModule, StoreModule],
  template: `
    <p>star-wars-store works!</p>
    <button type="button" (click)="loadPeople()">Load People</button>
    <pre>{{ people$ | ngrxPush | json }}</pre>
  `,
  styleUrls: ['./star-wars-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsStoreComponent {
  readonly #store = inject(Store);
  protected readonly people$ = this.#store.select(selectPeople);

  protected loadPeople() {
    this.#store.dispatch(StarWarsActions.load());
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'standalone-ngrx-star-wars-store',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>star-wars-store works!</p> `,
  styleUrls: ['./star-wars-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsStoreComponent {}

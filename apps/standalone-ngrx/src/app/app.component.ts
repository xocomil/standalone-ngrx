import { Component } from '@angular/core';
import { StarWarsStoreComponent } from '@standalone-ngrx/star-wars-store';

@Component({
  standalone: true,
  imports: [StarWarsStoreComponent],
  selector: 'st-ngrx-root',
  template: ` <standalone-ngrx-star-wars-store></standalone-ngrx-star-wars-store> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'standalone-ngrx';
}

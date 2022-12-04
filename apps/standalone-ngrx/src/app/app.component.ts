import { NxWelcomeComponent } from './nx-welcome.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'st-ngrx-root',
  template: ` <st-ngrx-nx-welcome></st-ngrx-nx-welcome> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'standalone-ngrx';
}

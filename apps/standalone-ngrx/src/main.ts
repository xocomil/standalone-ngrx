import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { starWarsFeature } from '../../../libs/star-wars-store/src/lib/+state/star-wars.reducer';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideStore({ [starWarsFeature.name]: starWarsFeature.reducer }), provideStoreDevtools()],
}).catch((err) => console.error(err));

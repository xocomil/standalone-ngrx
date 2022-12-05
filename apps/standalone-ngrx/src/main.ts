import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StarWarsEffects } from '@standalone-ngrx/star-wars-store';
import { starWarsFeature } from '../../../libs/star-wars-store/src/lib/+state/star-wars.reducer';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ [starWarsFeature.name]: starWarsFeature.reducer }),
    provideEffects([StarWarsEffects]),
    provideStoreDevtools(),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));

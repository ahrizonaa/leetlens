import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(App, {
  providers: provideAnimations(),
}).catch((err) => console.error(err));

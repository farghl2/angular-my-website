import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { polyfill } from 'smoothscroll-polyfill';



import { AppModule } from './app/app.module';
polyfill();


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

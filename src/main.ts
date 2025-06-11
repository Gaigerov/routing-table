import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { RouteService } from './app/route.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    RouteService
  ]
}).catch(err => console.error(err));

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideVnxTheme } from '@ng-nexus/commoncontrols';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideVnxTheme({ mode: 'light', brand: { preset: 'enterprise-blue' } }),
  ],
};

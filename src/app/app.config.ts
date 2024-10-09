import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Asegúrate de que esta ruta sea correcta
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Provisión del enrutador con tus rutas
    provideHttpClient() // Provisión del cliente HTTP
  ]
};

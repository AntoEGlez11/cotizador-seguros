import { RouterModule, Routes } from '@angular/router';
import { CotizacionComponent } from './main/cotizacion/cotizacion.component';
import { ResultadoCotizacionComponent } from './main/cotizacion/resultado-cotizacion/resultado-cotizacion.component';
import { NgModule } from '@angular/core';
import { ContratacionCotizacionComponent } from './main/cotizacion/contratacion-cotizacion/contratacion-cotizacion.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'cotizador', component: CotizacionComponent },
    { path: 'cotizacion', component: ResultadoCotizacionComponent },
    { path: 'contratacion', component: ContratacionCotizacionComponent },
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})
export class AppRoutingModule{}
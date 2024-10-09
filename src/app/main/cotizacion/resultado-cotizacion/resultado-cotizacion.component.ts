import { Component } from '@angular/core';
import { PaqueteCotizacionComponent } from "../paquete-cotizacion/paquete-cotizacion.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado-cotizacion',
  standalone: true,
  imports: [PaqueteCotizacionComponent,CommonModule],
  templateUrl: './resultado-cotizacion.component.html',
  styleUrl: './resultado-cotizacion.component.css'
})
export class ResultadoCotizacionComponent {

}

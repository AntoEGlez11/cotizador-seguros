import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paquete-cotizacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paquete-cotizacion.component.html',
  styleUrl: './paquete-cotizacion.component.css'
})
export class PaqueteCotizacionComponent {

  constructor(private router: Router){}
  paquetes = [
    { nombre: 'Paquete Básico', descripcion: 'Cobertura básica', coberturas: 'Responsabilidad Civil Gastos Médicos', precio: 5000 },
    { nombre: 'Paquete Estándar', descripcion: 'Cobertura estándar',coberturas: 'Responsabilidad Civil Gastos Médicos', precio: 7500 },
    { nombre: 'Paquete Premium', descripcion: 'Cobertura premium',coberturas: 'Responsabilidad Civil Gastos Médicos', precio: 10000 },
    { nombre: 'Paquete Deluxe', descripcion: 'Cobertura deluxe con asistencia en carretera',coberturas: 'Responsabilidad Civil Gastos Médicos', precio: 15000 }
  ];

  selectPaquete(paquete: any) {
    // Lógica para seleccionar el paquete
    console.log('Paquete seleccionado:', paquete);
    this.router.navigate(['/contratacion']);

  }

  selectEdit(paquete: any) {
    console.log('Editar Paquete');
    
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contratacion-cotizacion',
  standalone: true,
  imports: [
    ReactiveFormsModule],
  templateUrl: './contratacion-cotizacion.component.html',
  styleUrl: './contratacion-cotizacion.component.css'
})
export class ContratacionCotizacionComponent {

  contratanteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contratanteForm = this.fb.group({
      nombre: ['', Validators.required],
      rfc: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      calle: ['', Validators.required],
      ciudad: ['', Validators.required],
      estado: ['', Validators.required],
      codigoPostal: ['', Validators.required]
    });
  }

  onSubmit() {
    // Lógica para enviar los datos al backend
    console.log(this.contratanteForm.value);
    if(this.contratanteForm.valid)
      console.log(this.contratanteForm.value);
      // Redirige a la ruta de resultado de cotización
      this.router.navigate(['/emision']);
    
  }
}

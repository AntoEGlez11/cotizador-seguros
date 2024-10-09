import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cotizacion',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './cotizacion.component.html',
  styleUrl: './cotizacion.component.css'
})
export class CotizacionComponent {
  cotizadorForm: FormGroup;
  autos: string[] = ['BYD Qin', 'BYD Song', 'BYD Tang'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.cotizadorForm = this.fb.group({
      auto: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      cp: ['', Validators.required],
      date: ['', Validators.required],
    });
  }
  onSubmit() {
    // Lógica para enviar los datos al backend
    console.log(this.cotizadorForm.value);
    if(this.cotizadorForm.valid)
      console.log(this.cotizadorForm.value);
      // Redirige a la ruta de resultado de cotización
      this.router.navigate(['/cotizacion']);
    
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
      modelo: [''],
      edad: [''],
      cp: [''],
      contratacion: ['']
    });
  }
  onSubmit() {
    console.log(this.cotizadorForm.value);
    if(this.cotizadorForm.valid)
      this.router.navigate([Re])
    // Lógica para enviar los datos al backend
  }

}

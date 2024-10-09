import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteCotizacionComponent } from './paquete-cotizacion.component';

describe('PaqueteCotizacionComponent', () => {
  let component: PaqueteCotizacionComponent;
  let fixture: ComponentFixture<PaqueteCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaqueteCotizacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaqueteCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

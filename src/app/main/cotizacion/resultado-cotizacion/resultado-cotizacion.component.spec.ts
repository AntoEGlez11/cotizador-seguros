import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCotizacionComponent } from './resultado-cotizacion.component';

describe('ResultadoCotizacionComponent', () => {
  let component: ResultadoCotizacionComponent;
  let fixture: ComponentFixture<ResultadoCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoCotizacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

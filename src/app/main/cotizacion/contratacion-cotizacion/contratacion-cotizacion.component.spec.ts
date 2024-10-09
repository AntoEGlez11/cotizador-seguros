import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratacionCotizacionComponent } from './contratacion-cotizacion.component';

describe('ContratacionCotizacionComponent', () => {
  let component: ContratacionCotizacionComponent;
  let fixture: ComponentFixture<ContratacionCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratacionCotizacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratacionCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

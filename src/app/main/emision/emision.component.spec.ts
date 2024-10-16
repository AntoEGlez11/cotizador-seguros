import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionComponent } from './emision.component';

describe('EmisionComponent', () => {
  let component: EmisionComponent;
  let fixture: ComponentFixture<EmisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

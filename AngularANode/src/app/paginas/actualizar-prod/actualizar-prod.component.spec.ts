import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProdComponent } from './actualizar-prod.component';

describe('ActualizarProdComponent', () => {
  let component: ActualizarProdComponent;
  let fixture: ComponentFixture<ActualizarProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

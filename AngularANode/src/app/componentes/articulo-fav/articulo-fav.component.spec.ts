import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloFavComponent } from './articulo-fav.component';

describe('ArticuloFavComponent', () => {
  let component: ArticuloFavComponent;
  let fixture: ComponentFixture<ArticuloFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

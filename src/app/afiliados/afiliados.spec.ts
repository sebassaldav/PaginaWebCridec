import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Afiliados } from './afiliados';

describe('Afiliados', () => {
  let component: Afiliados;
  let fixture: ComponentFixture<Afiliados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Afiliados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Afiliados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

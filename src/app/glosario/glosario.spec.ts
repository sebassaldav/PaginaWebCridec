import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glosario } from './glosario';

describe('Glosario', () => {
  let component: Glosario;
  let fixture: ComponentFixture<Glosario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Glosario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Glosario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

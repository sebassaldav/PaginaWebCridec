import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estatico } from './estatico';

describe('Estatico', () => {
  let component: Estatico;
  let fixture: ComponentFixture<Estatico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estatico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estatico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

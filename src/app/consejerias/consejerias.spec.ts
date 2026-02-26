import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consejerias } from './consejerias';

describe('Consejerias', () => {
  let component: Consejerias;
  let fixture: ComponentFixture<Consejerias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consejerias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consejerias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

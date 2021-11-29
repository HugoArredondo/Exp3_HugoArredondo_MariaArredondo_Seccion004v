import { TestBed } from '@angular/core/testing';

import { IngresadosGuard } from './ingresados.guard';

describe('IngresadosGuard', () => {
  let guard: IngresadosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

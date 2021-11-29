import { TestBed } from '@angular/core/testing';

import { NoIngresadosGuard } from './no-ingresados.guard';

describe('NoIngresadosGuard', () => {
  let guard: NoIngresadosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoIngresadosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

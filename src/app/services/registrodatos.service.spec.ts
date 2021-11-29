import { TestBed } from '@angular/core/testing';

import { RegistrodatosService } from './registrodatos.service';

describe('RegistrodatosService', () => {
  let service: RegistrodatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrodatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CalculatorHandleService } from './calculator-handle.service';

describe('CalculatorHandleService', () => {
  let service: CalculatorHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

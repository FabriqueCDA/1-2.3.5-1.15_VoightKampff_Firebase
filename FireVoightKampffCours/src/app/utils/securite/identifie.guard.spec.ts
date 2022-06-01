import { TestBed } from '@angular/core/testing';

import { IdentifieGuard } from './identifie.guard';

describe('IdentifieGuard', () => {
  let guard: IdentifieGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IdentifieGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

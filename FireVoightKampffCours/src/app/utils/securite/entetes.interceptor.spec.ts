import { TestBed } from '@angular/core/testing';

import { EntetesInterceptor } from './entetes.interceptor';

describe('EntetesInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EntetesInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EntetesInterceptor = TestBed.inject(EntetesInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

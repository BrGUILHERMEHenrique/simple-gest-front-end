import { TestBed } from '@angular/core/testing';

import { AuthProviderGuard } from './auth-provider.guard';

describe('AuthProviderGuard', () => {
  let guard: AuthProviderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthProviderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

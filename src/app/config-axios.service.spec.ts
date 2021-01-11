import { TestBed } from '@angular/core/testing';

import { ConfigAxiosService } from './config-axios.service';

describe('ConfigAxiosService', () => {
  let service: ConfigAxiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigAxiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

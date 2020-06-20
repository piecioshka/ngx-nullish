import { TestBed } from '@angular/core/testing';

import { NgxNullishService } from './ngx-nullish.service';

describe('NgxNullishService', () => {
  let service: NgxNullishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNullishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

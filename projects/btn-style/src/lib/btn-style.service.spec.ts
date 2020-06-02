import { TestBed } from '@angular/core/testing';

import { BtnStyleService } from './btn-style.service';

describe('BtnStyleService', () => {
  let service: BtnStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtnStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

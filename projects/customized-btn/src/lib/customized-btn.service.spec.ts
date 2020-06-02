import { TestBed } from '@angular/core/testing';

import { CustomizedBtnService } from './customized-btn.service';

describe('CustomizedBtnService', () => {
  let service: CustomizedBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomizedBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

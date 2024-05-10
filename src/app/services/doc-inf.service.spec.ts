import { TestBed } from '@angular/core/testing';

import { DocInfService } from './doc-inf.service';

describe('DocInfService', () => {
  let service: DocInfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocInfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NgElementsService } from './ng-elements.service';

describe('NgElementsService', () => {
  let service: NgElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

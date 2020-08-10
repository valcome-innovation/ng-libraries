import { TestBed } from '@angular/core/testing';

import { NodeCoreService } from './node-core.service';

describe('NodeCoreService', () => {
  let service: NodeCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LayoutEventManagerService } from './layout-event-manager.service';

describe('LayoutEventManagerService', () => {
  let service: LayoutEventManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutEventManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

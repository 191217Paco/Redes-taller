import { TestBed } from '@angular/core/testing';

import { ClientSeeDashboardService } from './client-see-dashboard.service';

describe('ClientSeeDashboardService', () => {
  let service: ClientSeeDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSeeDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ClientAddDashboardService } from './client-add-dashboard.service';

describe('ClientAddDashboardService', () => {
  let service: ClientAddDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAddDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

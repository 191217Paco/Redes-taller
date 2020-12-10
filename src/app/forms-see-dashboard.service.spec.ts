import { TestBed } from '@angular/core/testing';

import { FormsSeeDashboardService } from './forms-see-dashboard.service';

describe('FormsSeeDashboardService', () => {
  let service: FormsSeeDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsSeeDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

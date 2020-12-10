import { TestBed } from '@angular/core/testing';

import { AddFormsDashboardService } from './forms-add-dashboard.service';

describe('AddFormsDashboardService', () => {
  let service: AddFormsDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFormsDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

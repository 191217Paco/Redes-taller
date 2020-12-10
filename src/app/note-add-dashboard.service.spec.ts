import { TestBed } from '@angular/core/testing';

import { NoteAddDashboardService } from './note-add-dashboard.service';

describe('NoteAddDashboardService', () => {
  let service: NoteAddDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteAddDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

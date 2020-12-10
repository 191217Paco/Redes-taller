import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAddDashboardComponent } from './note-add-dashboard.component';

describe('NoteAddDashboardComponent', () => {
  let component: NoteAddDashboardComponent;
  let fixture: ComponentFixture<NoteAddDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteAddDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteAddDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

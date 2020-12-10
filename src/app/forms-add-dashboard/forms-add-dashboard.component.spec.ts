import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAddDashboardComponent } from './forms-add-dashboard.component';

describe('FormsAddDashboardComponent', () => {
  let component: FormsAddDashboardComponent;
  let fixture: ComponentFixture<FormsAddDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAddDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAddDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

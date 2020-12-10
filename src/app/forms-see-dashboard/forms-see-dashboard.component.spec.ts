import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSeeDashboardComponent } from './forms-see-dashboard.component';

describe('FormsSeeDashboardComponent', () => {
  let component: FormsSeeDashboardComponent;
  let fixture: ComponentFixture<FormsSeeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsSeeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsSeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

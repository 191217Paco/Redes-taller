import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddDashboardComponent } from './client-add-dashboard.component';

describe('ClientAddDashboardComponent', () => {
  let component: ClientAddDashboardComponent;
  let fixture: ComponentFixture<ClientAddDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAddDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSeeDashboardComponent } from './client-see-dashboard.component';

describe('ClientSeeDashboardComponent', () => {
  let component: ClientSeeDashboardComponent;
  let fixture: ComponentFixture<ClientSeeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSeeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

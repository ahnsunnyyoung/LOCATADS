import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversDashboardComponent } from './drivers-dashboard.component';

describe('DriversDashboardComponent', () => {
  let component: DriversDashboardComponent;
  let fixture: ComponentFixture<DriversDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriversDashboardComponent]
    });
    fixture = TestBed.createComponent(DriversDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

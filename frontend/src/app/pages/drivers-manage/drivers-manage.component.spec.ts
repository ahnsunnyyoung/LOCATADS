import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversManageComponent } from './drivers-manage.component';

describe('DriversManageComponent', () => {
  let component: DriversManageComponent;
  let fixture: ComponentFixture<DriversManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriversManageComponent]
    });
    fixture = TestBed.createComponent(DriversManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversAddTaxiComponent } from './drivers-add-taxi.component';

describe('DriversAddTaxiComponent', () => {
  let component: DriversAddTaxiComponent;
  let fixture: ComponentFixture<DriversAddTaxiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriversAddTaxiComponent]
    });
    fixture = TestBed.createComponent(DriversAddTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

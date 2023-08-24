import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisersAddAdvertisementComponent } from './advertisers-add-advertisement.component';

describe('AdvertisersAddAdvertisementComponent', () => {
  let component: AdvertisersAddAdvertisementComponent;
  let fixture: ComponentFixture<AdvertisersAddAdvertisementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisersAddAdvertisementComponent]
    });
    fixture = TestBed.createComponent(AdvertisersAddAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

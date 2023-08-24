import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisersManageComponent } from './advertisers-manage.component';

describe('AdvertisersManageComponent', () => {
  let component: AdvertisersManageComponent;
  let fixture: ComponentFixture<AdvertisersManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisersManageComponent]
    });
    fixture = TestBed.createComponent(AdvertisersManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

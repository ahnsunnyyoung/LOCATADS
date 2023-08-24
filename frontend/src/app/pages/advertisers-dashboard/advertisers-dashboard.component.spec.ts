import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisersDashboardComponent } from './advertisers-dashboard.component';

describe('AdvertisersDashboardComponent', () => {
  let component: AdvertisersDashboardComponent;
  let fixture: ComponentFixture<AdvertisersDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisersDashboardComponent]
    });
    fixture = TestBed.createComponent(AdvertisersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

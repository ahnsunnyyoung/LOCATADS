import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideButtonsComponent } from './side-buttons.component';

describe('SideButtonsComponent', () => {
  let component: SideButtonsComponent;
  let fixture: ComponentFixture<SideButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideButtonsComponent]
    });
    fixture = TestBed.createComponent(SideButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

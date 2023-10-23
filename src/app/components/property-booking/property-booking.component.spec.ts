import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBookingComponent } from './property-booking.component';

describe('PropertyBookingComponent', () => {
  let component: PropertyBookingComponent;
  let fixture: ComponentFixture<PropertyBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyBookingComponent]
    });
    fixture = TestBed.createComponent(PropertyBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

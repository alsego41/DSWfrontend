import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToBeAHostComponent } from './how-to-be-a-host.component';

describe('HowToBeAHostComponent', () => {
  let component: HowToBeAHostComponent;
  let fixture: ComponentFixture<HowToBeAHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToBeAHostComponent]
    });
    fixture = TestBed.createComponent(HowToBeAHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCitiesComponent } from './trending-cities.component';

describe('TrendingCitiesComponent', () => {
  let component: TrendingCitiesComponent;
  let fixture: ComponentFixture<TrendingCitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingCitiesComponent]
    });
    fixture = TestBed.createComponent(TrendingCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

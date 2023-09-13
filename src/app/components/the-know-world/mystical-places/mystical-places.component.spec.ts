import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysticalPlacesComponent } from './mystical-places.component';

describe('MysticalPlacesComponent', () => {
  let component: MysticalPlacesComponent;
  let fixture: ComponentFixture<MysticalPlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MysticalPlacesComponent]
    });
    fixture = TestBed.createComponent(MysticalPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

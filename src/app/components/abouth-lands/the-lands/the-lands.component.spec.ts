import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLandsComponent } from './the-lands.component';

describe('TheLandsComponent', () => {
  let component: TheLandsComponent;
  let fixture: ComponentFixture<TheLandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheLandsComponent]
    });
    fixture = TestBed.createComponent(TheLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

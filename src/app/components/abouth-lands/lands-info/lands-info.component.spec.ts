import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandsInfoComponent } from './lands-info.component';

describe('LandsInfoComponent', () => {
  let component: LandsInfoComponent;
  let fixture: ComponentFixture<LandsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandsInfoComponent]
    });
    fixture = TestBed.createComponent(LandsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

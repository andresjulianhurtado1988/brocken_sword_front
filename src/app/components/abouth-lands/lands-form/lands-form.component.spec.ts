import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandsFormComponent } from './lands-form.component';

describe('LandsFormComponent', () => {
  let component: LandsFormComponent;
  let fixture: ComponentFixture<LandsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandsFormComponent]
    });
    fixture = TestBed.createComponent(LandsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

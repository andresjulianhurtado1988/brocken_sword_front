import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWorldComponent } from './the-world.component';

describe('TheWorldComponent', () => {
  let component: TheWorldComponent;
  let fixture: ComponentFixture<TheWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheWorldComponent]
    });
    fixture = TestBed.createComponent(TheWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBrokenSwordComponent } from './the-broken-sword.component';

describe('TheBrokenSwordComponent', () => {
  let component: TheBrokenSwordComponent;
  let fixture: ComponentFixture<TheBrokenSwordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheBrokenSwordComponent]
    });
    fixture = TestBed.createComponent(TheBrokenSwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

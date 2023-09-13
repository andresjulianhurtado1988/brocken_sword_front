import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicSystemComponent } from './magic-system.component';

describe('MagicSystemComponent', () => {
  let component: MagicSystemComponent;
  let fixture: ComponentFixture<MagicSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagicSystemComponent]
    });
    fixture = TestBed.createComponent(MagicSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

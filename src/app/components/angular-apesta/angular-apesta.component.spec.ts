import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularApestaComponent } from './angular-apesta.component';

describe('AngularApestaComponent', () => {
  let component: AngularApestaComponent;
  let fixture: ComponentFixture<AngularApestaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularApestaComponent]
    });
    fixture = TestBed.createComponent(AngularApestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

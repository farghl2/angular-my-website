import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadButtonComponent } from './head-button.component';

describe('HeadButtonComponent', () => {
  let component: HeadButtonComponent;
  let fixture: ComponentFixture<HeadButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadButtonComponent]
    });
    fixture = TestBed.createComponent(HeadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

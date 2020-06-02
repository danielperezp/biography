import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedBtnComponent } from './customized-btn.component';

describe('CustomizedBtnComponent', () => {
  let component: CustomizedBtnComponent;
  let fixture: ComponentFixture<CustomizedBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

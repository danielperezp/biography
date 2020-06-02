import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnStyleComponent } from './btn-style.component';

describe('BtnStyleComponent', () => {
  let component: BtnStyleComponent;
  let fixture: ComponentFixture<BtnStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

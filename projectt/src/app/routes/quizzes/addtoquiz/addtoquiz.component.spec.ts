import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AddtoQuizComponent } from './addtoquiz.component';

describe('AddtoQuizComponent', () => {
  let component: AddtoQuizComponent;
  let fixture: ComponentFixture<AddtoQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtoQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtoQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

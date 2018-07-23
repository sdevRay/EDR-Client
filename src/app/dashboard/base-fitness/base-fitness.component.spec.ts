import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFitnessComponent } from './base-fitness.component';

describe('BaseFitnessComponent', () => {
  let component: BaseFitnessComponent;
  let fixture: ComponentFixture<BaseFitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

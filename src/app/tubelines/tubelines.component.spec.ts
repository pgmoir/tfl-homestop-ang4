import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubelinesComponent } from './tubelines.component';

describe('TubelinesComponent', () => {
  let component: TubelinesComponent;
  let fixture: ComponentFixture<TubelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

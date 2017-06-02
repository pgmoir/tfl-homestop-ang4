import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubelineDetailComponent } from './tubeline-detail.component';

describe('TubelineDetailComponent', () => {
  let component: TubelineDetailComponent;
  let fixture: ComponentFixture<TubelineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubelineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubelineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

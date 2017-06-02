import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubelineEditComponent } from './tubeline-edit.component';

describe('TubelineEditComponent', () => {
  let component: TubelineEditComponent;
  let fixture: ComponentFixture<TubelineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubelineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubelineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

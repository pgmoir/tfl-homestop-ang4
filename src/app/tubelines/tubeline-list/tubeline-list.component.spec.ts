import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubelineListComponent } from './tubeline-list.component';

describe('TubelineListComponent', () => {
  let component: TubelineListComponent;
  let fixture: ComponentFixture<TubelineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubelineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubelineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

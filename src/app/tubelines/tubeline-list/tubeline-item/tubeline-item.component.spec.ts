import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubelineItemComponent } from './tubeline-item.component';

describe('TubelineItemComponent', () => {
  let component: TubelineItemComponent;
  let fixture: ComponentFixture<TubelineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubelineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

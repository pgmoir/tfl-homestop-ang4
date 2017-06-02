import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaillinesComponent } from './raillines.component';

describe('RaillinesComponent', () => {
  let component: RaillinesComponent;
  let fixture: ComponentFixture<RaillinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaillinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaillinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

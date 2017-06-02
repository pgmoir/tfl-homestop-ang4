import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytflComponent } from './mytfl.component';

describe('MytflComponent', () => {
  let component: MytflComponent;
  let fixture: ComponentFixture<MytflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

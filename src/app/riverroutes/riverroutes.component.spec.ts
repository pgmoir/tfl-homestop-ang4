import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverroutesComponent } from './riverroutes.component';

describe('RiverroutesComponent', () => {
  let component: RiverroutesComponent;
  let fixture: ComponentFixture<RiverroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

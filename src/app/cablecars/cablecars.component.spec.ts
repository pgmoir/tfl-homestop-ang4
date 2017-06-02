import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CablecarsComponent } from './cablecars.component';

describe('CablecarsComponent', () => {
  let component: CablecarsComponent;
  let fixture: ComponentFixture<CablecarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CablecarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CablecarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

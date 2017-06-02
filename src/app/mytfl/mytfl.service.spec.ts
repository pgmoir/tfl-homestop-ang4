/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MytflService } from './mytfl.service';

describe('Service: Mytfl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MytflService]
    });
  });

  it('should ...', inject([MytflService], (service: MytflService) => {
    expect(service).toBeTruthy();
  }));
});
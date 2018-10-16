import { TestBed } from '@angular/core/testing';

import { Profile2Service } from './profile2.service';

describe('Profile2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Profile2Service = TestBed.get(Profile2Service);
    expect(service).toBeTruthy();
  });
});

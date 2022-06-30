import { TestBed } from '@angular/core/testing';

import { ListOfStationsService } from './list-of-stations.service';

describe('ListOfStationsService', () => {
  let service: ListOfStationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfStationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

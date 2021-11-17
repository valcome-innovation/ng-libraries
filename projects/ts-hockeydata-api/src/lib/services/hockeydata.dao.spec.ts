import { TestBed } from '@angular/core/testing';
import { HockeyDataDAO } from './hockeydata.dao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import createSpy = jasmine.createSpy;

@Injectable()
class TestDAO extends HockeyDataDAO {
  public constructor(httpClient: HttpClient) {
    super('ebel', { apiKey: 'apiKey', referer: 'referer', displayPointsPerGame: false }, httpClient);
  }
}

describe('HockeydataDAO', () => {

  let service: HockeyDataDAO;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: { get: createSpy('getSpy') } },
        TestDAO
      ]
    });

    service = TestBed.inject(TestDAO);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });
});

 import { TestBed, inject } from '@angular/core/testing';
import { Headers, Http } from '@angular/http';
import { MovieSearchService } from './movie-search.service';
describe('MovieSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {provide:  Http } ]
    });
  });
it('should ...', inject([MovieSearchService], (service: MovieSearchService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('DataService', () => {
  let dataService: DataService; // Add this

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    dataService = TestBed.get(DataService);
    expect(dataService).toBeTruthy();
  });

  // tests for getJSON() method
  describe('getJSON', () => {
    it('should return a collection of questions', () => {
      dataService = TestBed.get(DataService);
      const dataResponse = [
        {
          "id": "1",
          "question": "What vehicles are covered?",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
          "id": "2",
          "question": "Can anyone drive a vehicle covered by a business policy?",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
      ];
      let response;
      spyOn(dataService, 'getJSON').and.returnValue(of(dataResponse));

      dataService.getJSON().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(dataResponse);
    });
  });
});

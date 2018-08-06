import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const creditCards = ['cc-test-1', 'cc-test-2'];
    const debitCards = ['dc-test-1', 'dc-test-2'];
    const netBanking = ['State Bank Of India', 'AXIS Bank', 'ICICI Bank', 'HDFC Bank', 'IDBI Bank'];

    return {
      creditCards,
      debitCards,
      netBanking
    };
  }
}

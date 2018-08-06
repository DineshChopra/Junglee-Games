import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  readonly creditCardsUrl = 'api/creditCards';
  readonly debitCardsUrl = 'api/debitCards';
  readonly netBankingUrl = 'api/netBanking';
  public package = { amount: 0,
                     paymentType: '',
                     manualAmount: 0 };
  constructor(private http: HttpClient) {
  }

  getCreditCards(): Observable<string[]> {
    return this.http.get<string[]>(this.creditCardsUrl);
  }
  getDebitCards(): Observable<string[]> {
    return this.http.get<string[]>(this.debitCardsUrl);
  }
  getNetBanking(): Observable<string[]> {
    return this.http.get<string[]>(this.netBankingUrl);
  }
}

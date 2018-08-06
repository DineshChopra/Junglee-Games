import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'jg-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.scss']
})
export class DebitCardComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }
  debitCards$;
  ngOnInit() {
    this.debitCards$ = this.paymentService.getDebitCards();
  }

}

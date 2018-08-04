import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'jg-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }
  creditCards$;
  ngOnInit() {
    this.creditCards$ = this.paymentService.getCreditCards();
  }

}

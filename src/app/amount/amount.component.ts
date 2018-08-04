import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../payment/payment.service';

@Component({
  selector: 'jg-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent implements OnInit {

  package = { amount: 0 };
  constructor(private router: Router, private paymentService: PaymentService) {
    this.package = this.paymentService.package;
  }
  ngOnInit() {
  }
  selectPayment() {
    if (this.package.amount === 0) {
      this.package['manualAmount'] = parseInt(this.package['manualAmount'], 10);
    }
    this.router.navigate(['payment']);
  }
}

import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment/payment.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'jg-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(private paymentService: PaymentService,
    private router: Router) {
    this.package = this.paymentService.package;
  }
  package: any;
  ngOnInit() {
  }

  get amount() {
    return this.package.amount || this.package.manualAmount;
  }

  addMoreCash() {
    this.router.navigate(['amount']);
  }
  get bank() {
    return this.package.paymentSource;
  }

}

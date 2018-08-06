import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'jg-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentType = '';
  package = {amount : 0};
  constructor(private paymentService: PaymentService, private router: Router) {
    this.package = this.paymentService.package;
  }
  ngOnInit() {
  }
  selectPayment(paymentType: string) {
    this.package['paymentType'] = paymentType;
    this.router.navigate([`payment/${paymentType}`]);
  }

  isActive(paymentType: string) {
    return this.package['paymentType'] === paymentType;
  }

}

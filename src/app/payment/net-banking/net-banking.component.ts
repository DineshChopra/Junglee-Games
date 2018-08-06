import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'jg-net-banking',
  templateUrl: './net-banking.component.html',
  styleUrls: ['./net-banking.component.scss']
})
export class NetBankingComponent implements OnInit {

  constructor(private paymentService: PaymentService, private router: Router) {
    this.package = this.paymentService.package;
  }
  banks$;
  package;
  ngOnInit() {
    this.banks$ = this.paymentService.getNetBanking();
  }

  doPayment() {
    this.router.navigate(['paymentSuccess']);
  }

}

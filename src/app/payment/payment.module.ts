import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { WalletComponent } from './wallet/wallet.component';
import { CashCardComponent } from './cash-card/cash-card.component';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule
  ],
  declarations: [
    PaymentComponent,
    CreditCardComponent,
    DebitCardComponent,
    NetBankingComponent,
    WalletComponent,
    CashCardComponent
  ],
  exports: [
    PaymentComponent,
    CreditCardComponent,
    DebitCardComponent,
    NetBankingComponent,
    WalletComponent,
    CashCardComponent
  ]
})
export class PaymentModule { }

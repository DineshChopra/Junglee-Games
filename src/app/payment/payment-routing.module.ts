import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { WalletComponent } from './wallet/wallet.component';
import { CashCardComponent } from './cash-card/cash-card.component';
import { PaymentGuardService } from './payment-guard.service';

const paymentRoutes: Routes = [
  {path: '', component: PaymentComponent, canActivate: [PaymentGuardService],
  children: [
    {path: 'creditCard', component: CreditCardComponent},
    {path: 'debitCard', component: DebitCardComponent},
    {path: 'netBanking', component: NetBankingComponent},
    {path: 'wallet', component: WalletComponent},
    {path: 'cashCard', component: CashCardComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(paymentRoutes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }

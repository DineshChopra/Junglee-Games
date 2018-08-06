import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmountComponent } from './amount/amount.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [
    {path: 'amount', component: AmountComponent},
    {path: 'paymentSuccess', component: PaymentSuccessComponent},
    {path: 'payment', loadChildren: './payment/payment.module#PaymentModule'},
    {path: '', redirectTo: 'amount', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

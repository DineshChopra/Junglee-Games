import { Injectable } from '@angular/core';
import {   CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
import { PaymentService } from './payment.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuardService implements CanActivate {

  constructor(private paymentService: PaymentService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('AuthGuard#canActivate called');
    const paymentType = state.url.split('/').length > 2 ? state.url.split('/')[2] : '';
    console.log('url -- ', state.url, ' paymentType : ', paymentType);
    this.paymentService.package.paymentType = paymentType;
    return true;
  }

}

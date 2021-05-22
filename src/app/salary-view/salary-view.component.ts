import { Component, OnInit } from '@angular/core';

import { PaymentResourceService } from '../services/payment-resoruce.service';

@Component({
  selector: 'app-salary-view',
  templateUrl: './salary-view.component.html',
  styleUrls: ['./salary-view.component.scss']
})
export class SalaryViewComponent implements OnInit {
  paymentsList : any = [];

  constructor(
    private paymentResourceService : PaymentResourceService, 
  ) { }

  ngOnInit(): void {
    this.getHelperPaymentsList();
  }

  /** helper functions */

  getHelperPaymentsList() {
    this.paymentResourceService.getPaymentsList().subscribe((data: any) => {
      this.paymentsList = data["records"];
      
      console.log("%c Payments list: ", "color: #338333", this.paymentsList);
    }, (error: any) => {
      console.log("%c Error payments list: ", "color: #e3242b", error);
    });
  }


  /** events buttons */

  editPayment(id: number) {

  }

  deletePayment(id: number) {

  }

}

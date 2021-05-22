import { Component, OnInit                  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SettingResourceService } from '../services/setting-resource.service';
import { PaymentResourceService } from '../services/payment-resoruce.service';

@Component({
  selector: 'app-adding-salary',
  templateUrl: './adding-salary.component.html',
  styleUrls: ['./adding-salary.component.scss']
})
export class AddingSalaryComponent implements OnInit {
  paymentForm: FormGroup = new FormGroup({
    amount : new FormControl('', Validators.required),
    month  : new FormControl('', Validators.required),
    year   : new FormControl('', Validators.required),
  });

  monthsListing: any = [];

  constructor(
    private settingResourceService: SettingResourceService,
    private paymentResourceService: PaymentResourceService,
  ) { }

  ngOnInit(): void {
    this.getHelperMonthsList();
  }

  /** helper functions */

  getHelperMonthsList() {
    this.settingResourceService.getMonthsList().subscribe((data: any) => {
      this.monthsListing = data["records"];
      
      console.log("%c Months listing: ", "color: #338333", this.monthsListing);
    }, (error: any) => {
      console.log("%c Error months list: ", "color: #e3242b", error);
    });
  }

  savePayment() {
    const object = {
      amount   : this.paymentForm.get('amount')?.value,
      id_month : this.paymentForm.get('month')?.value.id,
      year     : 2021,
      id_user  : 1,
    }

    console.log("%c Payment obj: ", "color: #59bfff", object);

    this.paymentResourceService.addPayment(object).subscribe((data: any) => {
      console.log(data);
    });
  }

}

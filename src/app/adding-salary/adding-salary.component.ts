import { Component, OnInit } from '@angular/core';

import { SettingResourceService } from '../services/setting-resource.service';

@Component({
  selector: 'app-adding-salary',
  templateUrl: './adding-salary.component.html',
  styleUrls: ['./adding-salary.component.scss']
})
export class AddingSalaryComponent implements OnInit {
  monthsListing: any = [];

  constructor(
    private settingResourceService: SettingResourceService,
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

}

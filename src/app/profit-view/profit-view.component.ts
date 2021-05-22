import { Component, OnInit } from '@angular/core';

import { ProfitResourceService } from '../services/profit-resource.service';

@Component({
  selector: 'app-profit-view',
  templateUrl: './profit-view.component.html',
  styleUrls: ['./profit-view.component.scss']
})
export class ProfitViewComponent implements OnInit {
  profitList: any = [];

  constructor(
    private profitResourceService: ProfitResourceService,
  ) { }

  ngOnInit(): void {
    this.getHelperProfitList();
  }


  /** helper functions */

  getHelperProfitList() {
    this.profitResourceService.getProfitList().subscribe((data: any) => {
      this.profitList = data["records"];

      console.log("%c Profit list: ", "color: #338333", this.profitList);
    }, (error: any) => {
      console.log("%c Error profit list: ", "color: #e3242b", error);
    });
  }


  /** events buttons */

  editProfit(id: number) {

  } 

  deleteProfit(id: number) {
    
  }

}

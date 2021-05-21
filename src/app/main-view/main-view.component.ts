import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  displayAddPayment : boolean = false;
  displayAddExpense : boolean = false;
  displayAddProfit  : boolean = false;

  constructor(

  ) { }

  ngOnInit(): void {

  }

  /** events on buttons */

  openModalAddPayment() {
    this.displayAddPayment = true;
  }

  closeModalAddPayment() {
    this.displayAddExpense = false;
  }

  openModalAddExpense() {
    this.displayAddExpense = true;
  }

  closeModalAddExpense() {
    this.displayAddExpense = false;
  }

  openModalAddProfit() {
    this.displayAddProfit = true;
  }

  closeModalAddProfit() {
    this.displayAddProfit = false;
  }
}

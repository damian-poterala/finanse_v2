import { Component, OnInit } from '@angular/core';
import { MenuItem          } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: "Opcje", 
        items: [
            { label: "Dodaj wypłatę" , icon: "pi pi-plus" }, 
            { label: "Dodaj wydatek" , icon: "pi pi-plus" }, 
            { label: "Dodaj przychód", icon: "pi pi-plus" },
        ]
      },
      { label: "Dane", 
        items: [
          { label: "Wydatki", icon: "pi pi-list"       }, 
          { label: "Wykresy", icon: "pi pi-chart-line" }
        ] 
      },
      { label: "Ustawienia", 
        items: [
          { label: "Motyw", icon: "pi pi-cog" }
        ] 
      },
    ];
  }

}

import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }             from '@angular/forms';
import { ReactiveFormsModule }     from '@angular/forms';

import { CalendarModule    } from 'primeng/calendar';
import { DropdownModule    } from 'primeng/dropdown';
import { InputTextModule   } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule    } from 'primeng/password';
import { DividerModule     } from 'primeng/divider';
import { MenuModule        } from 'primeng/menu';
import { DialogModule      } from 'primeng/dialog';
import { PanelModule       } from 'primeng/panel';
import { TableModule       } from 'primeng/table';
import { TooltipModule     } from 'primeng/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AddingSalaryComponent } from './adding-salary/adding-salary.component';
import { EditSalaryComponent } from './edit-salary/edit-salary.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { MenuComponent } from './menu/menu.component';
import { SalaryViewComponent } from './salary-view/salary-view.component';
import { ProfitViewComponent } from './profit-view/profit-view.component';
import { AddingProfitComponent } from './adding-profit/adding-profit.component';
import { EditProfitComponent } from './edit-profit/edit-profit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainViewComponent,
    AddingSalaryComponent,
    EditSalaryComponent,
    DiagramsComponent,
    MenuComponent,
    SalaryViewComponent,
    ProfitViewComponent,
    AddingProfitComponent,
    EditProfitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    CalendarModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    PasswordModule,
    DividerModule,
    MenuModule,
    DialogModule,
    PanelModule,
    TableModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AddingSalaryComponent } from './adding-salary/adding-salary.component';
import { EditSalaryComponent } from './edit-salary/edit-salary.component';
import { DiagramsComponent } from './diagrams/diagrams.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainViewComponent,
    AddingSalaryComponent,
    EditSalaryComponent,
    DiagramsComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

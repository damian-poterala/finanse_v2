import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent        } from './login/login.component'; 
import { MainViewComponent     } from './main-view/main-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},

  { path: 'registration', component: RegistrationComponent },
  { path: 'login'       , component: LoginComponent        },
  { path: 'main-view'   , component: MainViewComponent     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash             : true,
    onSameUrlNavigation : 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { AuthGuard } from '../app/core/auth.guard';
import { HomeComponent } from '../app/home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MyeqComponent } from './myeq/myeq.component';
import { WydarzeniaComponent } from './wydarzenia/wydarzenia.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'kontakt', component: KontaktComponent},
  { path: 'myeq', component: MyeqComponent},
  { path: 'wydarzenia', component: WydarzeniaComponent},
  {
    path: 'mainpage',
    component: MainpageComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from '../app/user/user.revolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdModalOptions } from './modal-options';
import { HomeComponent } from './home/home.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import {AppRoutingModule} from '../app/app-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MyeqComponent } from './myeq/myeq.component';
import { WydarzeniaComponent } from './wydarzenia/wydarzenia.component';
import { MenuComponent } from './menu/menu.component';
import { AgmCoreModule } from '@agm/core';
import { UploadComponent } from './upload/upload.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { RatingComponent } from './rating/rating.component';
import { AdListingComponent } from './ad-listing/ad-listing.component';
import { NgbdModalOptions1} from '../app/modal-options1';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    NgbdModalOptions,
    NgbdModalOptions1,
    HomeComponent,
    HomeRouteComponent,
    MainpageComponent,
    KontaktComponent,
    MyeqComponent,
    WydarzeniaComponent,
    MenuComponent,
    UploadComponent,
    RatingComponent,
    AdListingComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAs3LRMSfJQ1d2CzGrldAhGJD9CiAu9AEc'
    }),

  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './page/comic/comic.component';
import { ComicLoadService } from './service/comic-load.service';
// httpmodule
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComicDetailComponent } from './page/comic-detail/comic-detail.component';
// angular material
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CookieService } from 'ngx-cookie-service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
} from '@angular/material';
import { LoaderService } from './service/loader.service';
import { LoaderInterceptorService } from './service/loader-interceptor.service';
import { LoaderComponent } from './page/loader/loader.component';
import { LoginComponent } from './page/login/login.component';
import { AuthService } from './service/auth.service';
// firebase login
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {/* your firebase web config */
  apiKey: "AIzaSyAKoyJI-ySbIrcfIGi6kdskKdHN80gPXdA",
  authDomain: "login-3278a.firebaseapp.com",
  databaseURL: "https://login-3278a.firebaseio.com",
  projectId: "login-3278a",
  storageBucket: "login-3278a.appspot.com",
  messagingSenderId: "475442789379",
  appId: "1:475442789379:web:f7d5c267c4683fbd"
}


@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    ComicDetailComponent,
    LoaderComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatCardModule,
    PortalModule,
    ScrollingModule,
    InfiniteScrollModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [ComicLoadService, LoaderService, AuthService, CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

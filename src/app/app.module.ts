import { Search } from './../pages/search/search';
import { InboxPage } from './../pages/inbox/inbox';
import { ProfilePage } from './../pages/profile/profile';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2'
import {AngularFireAuthModule} from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {LoginPageModule} from './../pages/login/login.module'
import {ProfilePageModule} from './../pages/profile/profile.module'
import { ModalPost } from '../pages/modal-post/modal-post';
import { MessageDetail } from '../pages/message-detail/message-detail';
import { NewMessage } from '../pages/new-message/new-message';

import { RequestPage } from '../pages/request/request'
import { SearchPremiumPage } from '../pages/search-premium/search-premium';
import { SearchBasicPage } from '../pages/search-basic/search-basic';
import { ModalAdPage } from '../pages/modal-ad/modal-ad';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const CREDENTIALS = {
  apiKey: "AIzaSyBZSM3NEYOypkXGBb0mnf74dthNOK3zRQw",
  authDomain: "decibelapps.firebaseapp.com",
  databaseURL: "https://decibelapps.firebaseio.com",
  projectId: "decibelapps",
  storageBucket: "decibelapps.appspot.com",
  messagingSenderId: "759458246943"
};

@NgModule({
  declarations: [
    MessageDetail,
    NewMessage,
    MyApp,
    //LoginPage,
    HomePage,
    //ProfilePage,
    Search,
    ModalPost,
    InboxPage,
    RequestPage,
    SearchPremiumPage,
    SearchBasicPage,
    ModalAdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    LoginPageModule,
    ProfilePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ProfilePage,
    Search,
    ModalPost,
    InboxPage,
    MessageDetail,
    NewMessage,
    RequestPage,
    SearchPremiumPage,
    SearchBasicPage,
    ModalAdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuthModule
  ]
})
export class AppModule {}

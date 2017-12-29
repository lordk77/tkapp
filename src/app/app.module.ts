import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { TabsPage } from '../pages/tabs/tabs';
import { ScannerPage } from '../pages/scanner/scanner';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { SignupPage } from '../pages/signup/signup';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SupportPage } from '../pages/support/support';





import { UserData } from '../providers/user-data/user-data';
import { DataProvider } from '../providers/data/data';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    TabsPage,
    TutorialPage,
    ScannerPage,
    SignupPage,
    AccountPage,
    LoginPage,
    SupportPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    TabsPage,
    TutorialPage,
    ScannerPage,
    SignupPage,
    AccountPage,
    LoginPage,
    SupportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    UserData,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}

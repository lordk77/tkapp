import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
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
import { EventProvider } from '../providers/event/event';
import { Settings } from '../providers/providers';
import { Api } from '../providers/providers';


export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}


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
	HttpClientModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: ItemDetailsPage, name: 'ItemDetailsPage', segment: 'detail' }
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
	Api,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    UserData,
    EventProvider,
	{ provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

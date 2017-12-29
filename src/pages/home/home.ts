import { Component, ViewChild } from '@angular/core';
import { AlertController, App, FabContainer, ItemSliding, List, ModalController, NavController, ToastController, LoadingController, Refresher } from 'ionic-angular';
import { UserData } from '../../providers/user-data/user-data';

import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  // the list is a child of the event page
  // @ViewChild('eventList') gets a reference to the list
  // with the variable #eventList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('eventList', { read: List }) eventList: List;


  queryText = '';
  shownEvents: any = [];
  events: any = [];

  constructor(
      public alertCtrl: AlertController,
      public app: App,
      public loadingCtrl: LoadingController,
      public modalCtrl: ModalController,
      public navCtrl: NavController,
      public toastCtrl: ToastController,
      public user: UserData,
      public dataService : DataProvider,
  ) {
  }




  ionViewDidLoad() {
    this.app.setTitle('Event');
    this.updateEvent();
  }

  updateEvent() {
    // Close any open sliding items when the event updates
    this.eventList && this.eventList.closeSlidingItems();
    this.events = this.dataService.filterItems(this.queryText);
  }



}

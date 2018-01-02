import { Component, ViewChild } from '@angular/core';
import { AlertController, App, List, ModalController, NavController, ToastController, LoadingController } from 'ionic-angular';
import { UserData } from '../../providers/user-data/user-data';

import { EventProvider } from '../../providers/event/event';
import { Event } from '../../models/event';


import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/toPromise';

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
  events: Event[]=[];

   eventCategories: any = [];


  constructor(
      public alertCtrl: AlertController,
      public app: App,
      public loadingCtrl: LoadingController,
      public modalCtrl: ModalController,
      public navCtrl: NavController,
      public toastCtrl: ToastController,
      public user: UserData,
      public eventService : EventProvider,
  ) {
  }




  ionViewDidLoad() {
    this.app.setTitle('Event');
	this.eventService.refreshEvents();
	this.eventCategories = this.eventService.getEventCategories();
console.log('this.eventCategories:' + this.eventCategories);
  }
  
  updateEvents()
  {
    this.events = this.eventService.filterItems(this.queryText);
  }
  


  
  
   doRefresh(refresher) {

    // Close any open sliding items when the event updates
    this.eventList && this.eventList.closeSlidingItems();
	
	console.log('Begin async operation', refresher);

	
	this.eventService.refreshEvents().subscribe((resp) => {
      refresher.complete();
    }, (err) => {
      refresher.complete();
      let toast = this.toastCtrl.create({
        message: err,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
	
	
	
	
	
	
	
  }

  
  goToEventDetail(_event)
  {
	  this.navCtrl.push('ItemDetailsPage', {
      event: _event
    });
	this.queryText='';
  }

  goToEventListByCategory(selectedCategory)
  {
	  this.navCtrl.push('ListPage', {
      filter: selectedCategory,
	  filterType: 'CATEGORY',
    });
  }
  
  goToEventListByQuery()
  {
	  this.navCtrl.push('ListPage', {
      filter: this.queryText,
	  filterType: 'QUERY',
    });
	this.queryText='';
  }




}

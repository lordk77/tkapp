import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { EventProvider } from '../../providers/event/event';
import { Event } from '../../models/event';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  events: Event[]

  filter: any;
  filterType: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
      public eventService : EventProvider) {

	this.filter = navParams.get('filter');
	this.filterType = navParams.get('filterType');	
	if(this.filterType==='CATEGORY')
		this.events = this.eventService.filterItemsByCategory(this.filter);
	else
		this.events = this.eventService.filterItems(this.filter);
    
  }

  itemTapped(_event, item) {
    this.navCtrl.push('ItemDetailsPage', {
       event: item
    });
  }
}

import { Component } from '@angular/core';

import {Events, NavController, NavParams} from 'ionic-angular';
import {Ticket} from "../../models/ticket";
import {TicketProvider} from "../../providers/ticket/ticket";
import {TabsPage} from "../tabs/tabs";


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedEvent: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ticketService: TicketProvider, public events: Events, public tabPage: TabsPage) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedEvent = navParams.get('event');
  }


  buyTicket()
  {
    this.ticketService.buyTicket(this.selectedEvent.eventUUID);
    this.tabPage.incrementTicketsCount();
    this.goHome();

  }

  goHome()
  {
    this.navCtrl.popToRoot();
  }






}

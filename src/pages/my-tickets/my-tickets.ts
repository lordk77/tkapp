import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { TicketProvider } from '../../providers/ticket/ticket';
import { Ticket } from '../../models/ticket';
import {TicketDetailPage} from "../ticket-detail/ticket-detail";


@Component({
  selector: 'page-my-tickets',
  templateUrl: 'my-tickets.html'
})
export class MyTickets {
  tickets: Ticket[]



  constructor(public navCtrl: NavController, public navParams: NavParams,
      public ticketService : TicketProvider) {

		this.tickets = this.ticketService.getTickets();
  }

  itemTapped(_event, item) {
    this.navCtrl.push('TicketDetailPage', {
      ticket: item
    });
  }
}

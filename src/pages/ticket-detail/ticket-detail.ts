import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-ticket-detais',
  templateUrl: 'ticket-detail.html'
})
export class TicketDetailPage {
  selectedTicket: any;
  qrCodeValue: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedTicket = navParams.get('ticket');
    this.qrCodeValue = '{"ticketUUID":' + this.selectedTicket.ticketUUID + '}';
  }
}

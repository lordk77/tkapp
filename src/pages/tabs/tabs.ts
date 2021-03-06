import { Component, ViewChild } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';


import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { ScannerPage } from '../scanner/scanner';
import { SchedulerPage } from '../scheduler/scheduler';

import {Events, App, NavController, ToastController, Nav} from "ionic-angular";
import {TicketProvider} from "../../providers/ticket/ticket";
import {MyTickets} from "../my-tickets/my-tickets";
import {EventProvider} from "../../providers/event/event";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 @ViewChild(Nav) nav: Nav;


  tab1Root = HomePage;
  tab2Root = SchedulerPage;
  tab3Root = ScannerPage;
  tab5Root = MyTickets;
  ticketsCount : number = 0; // default 0
  ticketCountBadge='';
  constructor(private barcodeScanner: BarcodeScanner,
              public app: App,
              public events: Events, public ticketService : TicketProvider,
              public navCtrl: NavController, public  eventService:EventProvider,
              public toastCtrl: ToastController) {

  }


  incrementTicketsCount(){
    this.ticketsCount = this.ticketsCount+1;
    this.publishTicketsCountUpdate();
  }

  resetTicketsCount(){
    this.ticketsCount = this.ticketsCount-1;
    this.publishTicketsCountUpdate();
  }


  subscribeToTicketsCountChange(){
    // Method to run when tab count changes
    return this
      .events
      .subscribe("tabs-page:tickets-count-update", this.refreshTicketsCount);
  }

  publishTicketsCountUpdate(){
    this.ticketCountBadge = '' + (this.ticketsCount && this.ticketsCount >0 ? this.ticketsCount:'');
    // Call this method when you have changed the count
    return this
      .events
      .publish("tabs-page:tickets-count-update");

  }

  refreshTicketsCount(){


  }

  ionViewWillEnter() {
    this.subscribeToTicketsCountChange();
  }


public scanQR()
{
  this.barcodeScanner.scan().then(
  (barcodeData) => {
         console.log("Scanned successfully!");
      console.log(barcodeData.text);
    try
    {
      var eventInfo = JSON.parse(barcodeData.text);
      console.log(this.eventService.getEventByUUID(eventInfo.eventUUID) && this.eventService.getEventByUUID(eventInfo.eventUUID).length>0);
      if(this.eventService.getEventByUUID(eventInfo.eventUUID) && this.eventService.getEventByUUID(eventInfo.eventUUID).length>0)
        this.goToEventDetail(this.eventService.getEventByUUID(eventInfo.eventUUID)[0]);
      else
      {
        let toast = this.toastCtrl.create({
          message: 'Event not found',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }
    catch(Exception)
    {
    console.log(''+Exception);
    let toast = this.toastCtrl.create({
        message: 'Invalid code:'+Exception,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }

  }, (err) => {
      console.log(err);
  });
}



  goToEventDetail(_event)
  {
  	  this.nav.getActiveChildNavs()[0].push('ItemDetailsPage', {
      event: _event
    });
  }






}

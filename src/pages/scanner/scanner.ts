import { Component } from '@angular/core';

import { NavController, NavParams , App, ToastController} from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {EventProvider} from "../../providers/event/event";

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private barcodeScanner: BarcodeScanner, public  eventService:EventProvider,
              public toastCtrl: ToastController
  ) {





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
    this.goHome();
    }

  }, (err) => {
      console.log(err);
  });
}



  goToEventDetail(_event)
  {
  	  this.navCtrl.push('ItemDetailsPage', {
      event: _event
    });
  }


ionViewWillEnter()
{
this.scanQR()
}

  goHome()
  {
    this.navCtrl.popToRoot();
  }

}

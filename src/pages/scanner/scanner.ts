import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {





  }


public scanQR()
{
  this.barcodeScanner.scan().then(
  (barcodeData) => {
         console.log("Scanned successfully!");
      console.log(barcodeData);
  }, (err) => {
      console.log(err);
  });
}



}

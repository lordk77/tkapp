import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { ScannerPage } from '../scanner/scanner';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab5Root = ScannerPage;

  constructor(private barcodeScanner: BarcodeScanner) {

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

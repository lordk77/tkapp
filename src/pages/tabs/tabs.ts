import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { ScannerPage } from '../scanner/scanner';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = ScannerPage;

  constructor() {

  }
}

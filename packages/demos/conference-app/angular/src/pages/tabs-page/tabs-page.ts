import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
// import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = AboutPage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  /*constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
  */

  constructor() {
    this.mySelectedIndex = 0;
  }

}

import { TabComponent } from './../tab/tab.component';
import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  constructor() { }

  ngAfterContentInit() {
    this.select(this.tabs.first);
  }

  select(tab: TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }
}

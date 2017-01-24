import { TabComponent } from './../tab/tab.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabs: TabComponent[] = [];

  constructor() { }

  ngOnInit() {
  }

  select(tab: TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length == 0) {
      this.select(tab);
    }
    this.tabs.push(tab);
  }
}

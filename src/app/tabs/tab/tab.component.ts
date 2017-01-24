import { TabsComponent } from './../tabs/tabs.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() title: String;
  selected: boolean;

  constructor(
    private tabs: TabsComponent
  ) { }

  ngOnInit() {
    this.tabs.addTab(this);
  }
}

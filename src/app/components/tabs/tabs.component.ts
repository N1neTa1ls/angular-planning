import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input()
  public items: string[];

  public selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

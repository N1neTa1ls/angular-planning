import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input()
  public title: string = '';

  @Input()
  public options: {value: string, title: string}[] = [];

  @Input()
  public disabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

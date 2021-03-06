import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input()
  public iconPath: string;

  @Input()
  public type: string = 'text';

  @Input()
  public placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

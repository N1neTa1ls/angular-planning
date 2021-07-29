import { Component, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  public type: 'accent' | 'default' = 'default';

  @Input()
  public iconPath: string;

  @Input()
  public title: string;

  @Input()
  public text: string;

  @Output()
  public click: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor() { }

  ngOnInit(): void {
  }

}

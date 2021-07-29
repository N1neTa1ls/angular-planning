import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public programmOptions = [{
    value: 1,
    title: 'Все'
  }];

  public periodOptions = [{
    value: 1,
    title: 'Июнь 2019'
  }];

  public statusOptions = [{
    value: 1,
    title: 'Все'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}

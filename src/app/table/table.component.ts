import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public options = [{
    value: 1,
    title: 'По прогрессу обучения'
  }];

  public list = [
    {
      data: '23 дек., 9:00',
      title: 'Страхование с заботой о клиенте',
      count: 12,
      lead: '',
      progress: 97
    },
    {
      data: '14 ноя., 9:30',
      title: 'Главные правила продаж',
      count: 10,
      lead: '',
      progress: 94
    },
    {
      data: '19 окт., 14:30',
      title: 'Первичное обучение КС',
      count: 8,
      lead: '',
      progress: 93
    },
    {
      data: '10 окт., 16:00',
      title: 'Вторичное обучение КС',
      count: 18,
      lead: '',
      progress: 91
    },
    {
      data: '5 окт., 15:00',
      title: 'Вклады: теория и практика',
      count: 6,
      lead: '',
      progress: 87
    },
    {
      data: '27 сент., 11:00',
      title: 'Очное обучение менеджеров',
      count: 20,
      lead: '',
      progress: 85
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

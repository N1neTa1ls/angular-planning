import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public options = [{
    value: 1,
    title: 'Страхование с заботой о клиенте'
  }];

  public events = [{
    info: [{
      value: 1,
      title: 'Главные правила продаж'
    }],
    data: [{
      value: 1,
      title: '28 ноября'
    }],
    time: [{
      value: 1,
      title: '9:00'
    }],
    lead: [{
      value: 1,
      title: 'Сергей Ефремов'
    }],
  }, {
    info: [{
      value: 1,
      title: 'Страхование без потерь'
    }],
    data: [{
      value: 1,
      title: '30 ноября'
    }],
    time: [{
      value: 1,
      title: '15:00'
    }],
    lead: [{
      value: 1,
      title: 'Сергей Ефремов'
    }],
  }, {
    info: [{
      value: 1,
      title: 'Страховой случай или как помочь клиенту'
    }],
    data: [{
      value: 1,
      title: '2 ноября'
    }],
    time: [{
      value: 1,
      title: '19:00'
    }],
    lead: [{
      value: 1,
      title: 'Сергей Ефремов'
    }],
  }];

  public radioOptions = [
    {
      value: '1',
      title: 'Не использовать код доступа'
    },
    {
      value: '2',
      title: 'Требовать регистрацию'
    },
    {
      value: '3',
      title: 'Запросить только имя и фамилию'
    },
    {
      value: '4',
      title: 'Не требовать регистрацию, имя и фамилию'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

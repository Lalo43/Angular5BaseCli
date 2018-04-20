import {Component} from '@angular/core';

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectOverviewExample {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
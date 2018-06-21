import { Component, OnInit,Input } from '@angular/core';
import {IPlace} from '../places';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {

  constructor() { }

  @Input()
  place:IPlace;


}

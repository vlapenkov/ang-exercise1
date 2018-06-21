import { Component, OnInit,Input } from '@angular/core';
import {IPlace} from '../places';

@Component({
  selector: 'app-teddy',
  templateUrl: './teddy.component.html',
  styleUrls: ['./teddy.component.css']
})


export class TeddyComponent {

  @Input()
  place: IPlace;

}

import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {IPlace} from '../places';

@Component({
  selector: 'app-placecard',
  templateUrl: './placecard.component.html',
  styleUrls: ['./placecard.component.css']
})
export class PlacecardComponent implements OnInit {

  @Input()
  place:IPlace;

  @Output()
  public setPlace: EventEmitter<IPlace> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public setCurrentPlaceActive()
  {
    this.setPlace.emit(this.place);
  }
}

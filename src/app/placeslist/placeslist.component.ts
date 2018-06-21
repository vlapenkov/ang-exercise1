import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {IPlace, places$} from '../places';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-placeslist',
  templateUrl: './placeslist.component.html',
  styleUrls: ['./placeslist.component.css']
})
export class PlaceslistComponent implements OnInit {

  @Input()
  public selectedCategory:string;
  public places$: Observable<IPlace[]> = places$;

  @Output()
  public setPlace: EventEmitter<IPlace> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectPlace(place)
  {
    this.setPlace.emit(place);
  }
}

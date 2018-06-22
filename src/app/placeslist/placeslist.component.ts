import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {IPlace, places$} from '../places';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-placeslist',
  templateUrl: './placeslist.component.html',
  styleUrls: ['./placeslist.component.css']
})
export class PlaceslistComponent {

  
  @Input()
  public selectedCategory:string;
  public places$: Observable<IPlace[]> = places$;

  @Output()
  public setPlace: EventEmitter<IPlace> = new EventEmitter();

 

  selectPlace(place:IPlace)
  {
    this.setPlace.emit(place);
  }
}

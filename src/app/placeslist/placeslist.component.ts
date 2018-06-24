import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {IPlace, places$} from '../places';
import {Observable} from 'rxjs';
import { PlacesService } from '../places.service';


@Component({
  selector: 'app-placeslist',
  templateUrl: './placeslist.component.html',
  styleUrls: ['./placeslist.component.css']
})
export class PlaceslistComponent implements OnInit {
  constructor(private _placesService :PlacesService) {

  }
  ngOnInit(): void {
    this._placesService.getPlaces().subscribe(( places:IPlace[])=> {     
      this.places=places;
    this.selectPlace(places[0]);
  },
  (error) => {
    console.log(error.message); 
  }
);
    /*
    places$.subscribe(( places:IPlace[])=> {
     
      this.places=places;
    this.selectPlace(places[0]);
    },
      (error) => {console.log(error.message); }
  );
  */
} 

  
  @Input()
  public selectedCategory:string;
  
  public places: IPlace[]  ;

  @Output()
  public setPlace: EventEmitter<IPlace> = new EventEmitter();

 

  selectPlace(place:IPlace)
  {
    this.setPlace.emit(place);
  }
}

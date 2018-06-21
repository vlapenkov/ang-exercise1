import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-placesfilter',
  templateUrl: './placesfilter.component.html',
  styleUrls: ['./placesfilter.component.css']
})
export class PlacesfilterComponent  {
 
  categories:string[] =["hotel", "fishing", "tours","wheather"];


  @Output()
  public search: EventEmitter<string> = new EventEmitter();

public selectCurCategory(category:string) :void
{
  this.search.emit(category);
}

  

}

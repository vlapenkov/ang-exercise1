import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-placesfilter',
  templateUrl: './placesfilter.component.html',
  styleUrls: ['./placesfilter.component.css']
})
export class PlacesfilterComponent  {
 public activecategory = '';
  categories:string[] =['hotel', 'fishing', 'tours','wheather'];


  @Output()
  public search: EventEmitter<string> = new EventEmitter();

public selectCurCategory(category:string) :void
{
  this.activecategory=category;
  this.search.emit(category);
}

  

}

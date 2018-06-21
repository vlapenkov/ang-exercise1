import { Pipe, PipeTransform } from '@angular/core';
import {IPlace} from './places';

@Pipe({
  name: 'placesFilterpipe'
})
export class PlacesfiltPipe implements PipeTransform {

  public transform(places: IPlace[], searchTerm: string): IPlace[] {
    if (!searchTerm) {
      return places;
    }
    return places.filter((place: IPlace) => {
      return place.type.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}

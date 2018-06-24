import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IPlace} from '../app/places';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlacesService {

  constructor( private _httpClient: HttpClient)
    {   
   }

 public getPlaces(): Observable<IPlace[]> {return  this._httpClient.get<IPlace[]>('./assets/places.json');}
  
  /*
  public getBool():boolean
  {return true;}
  */
}

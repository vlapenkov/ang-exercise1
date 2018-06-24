import {Observable, of} from 'rxjs';
import {debounceTime, delay} from 'rxjs/internal/operators';


export interface IPlace
{
    img: string,
    address: string,
    phone:  number,
    weather: IWheather,
    social_info: ISocialInfo,
    type:string
}

interface IWheather
{
    title:string,
    icon:string,
    water:number,
    temperature: number

}
interface ISocialInfo {
    title: string,
    img:string,
    followers:number,
    following:number
}

/*
const places: IPlace[] = [
    {
        img:'https://via.placeholder.com/50x50/ff0000',
      address:'address1 ',
      phone: 79301267728,
      weather : {
          title:'cool wheather',
          icon:'./assets/images/cloudy.png',
          water:20,
          temperature:30
      },
      social_info: {
          title:'open air ',
          img: './assets/images/r1.jpg',
          followers:20,
          following:10
      },
      type: 'hotel'
    },
    {
        img:'./assets/images/res.jpg',
      address:'address2 ',
      phone: 45623467853,
      weather : {
          title:'cool wheather',
          icon:'./assets/images/cloudy.png',
          water:21,
          temperature:31
      },
      social_info: {
          title:'fancy games',
          img: './assets/images/r1.jpg',
          followers:270,
          following:104
      },
      type: 'fishing'
    },
    
    {        
        img:'./assets/images/res.jpg',
      address:'address3 ',
      phone: 1234567890,
      weather : {
          title:'cool wheather',
          icon:'./assets/images/cloudy.png',
          water:25,
          temperature:35
      },
      social_info: {
          title:'soccer',
          img: './assets/images/r1.jpg',
          followers:210,
          following:130
      },
      type: 'hotel'
    }
];
    
  
  export const places$: Observable<IPlace[]> = of(places)
    .pipe(
      delay(1000)
    );
*/
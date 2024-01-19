/*
SERVICE THAT GETS AND HANDLES DATA FROM THE OWN CREATED 'FAKE-API',
GENERATED WITH JSON-FILE /assets/destinations/destinations.json
ON THE SITE "mocki.io"


*/
import { Injectable } from '@angular/core';
import { Observable,concatMap,map } from 'rxjs';
import { destination } from '../model/destination.model';
import { HttpClient } from '@angular/common/http';
import { DestinationmapperService } from './destinationmapper.service';

@Injectable({
  providedIn: 'root'
})
export class DestinationApiResponseService {

    //Continents stringArray, used to check if a certain destination is located on a continent
  continents:string[]=["Asie","Afrique","Europe","Océanie","Amérique du Nord","Amérique du Sud"];

  //url of 'Fake-API' response, that contains the destinations of "destinations.json"
  baseUrl:string="https://mocki.io/v1/7ce878fc-745c-4f01-84c7-df90d988ed60"

  constructor(private http:HttpClient,private destinationmapper :DestinationmapperService) {}


    getAllDestinations() : Observable<destination[]>{
      return (this.http.get<destination[]>(`${this.baseUrl}`))
      .pipe(map((destinationResponse)=>this.destinationmapper.ToClient(destinationResponse)));
    }

    getDestinationById(id:number) :Observable<destination>{
      return this.http.get<destination[]>(`${this.baseUrl}`)
      .pipe(concatMap(destinationResponse=>destinationResponse.filter(destination=>destination.id==id)));

    }

    getDestinationByContinent(continent:number):Observable<destination[]>{
      return this.http.get<destination[]>(`${this.baseUrl}`)
      .pipe(map(destinationResponse=>destinationResponse.filter(destination=>destination.continent==this.continents[continent])));

    }

    getDestinationCountPerContinent(continent:number):Observable<number>{
     return this.getDestinationByContinent(continent).pipe(map((result)=>(result.length)))
    }



    }





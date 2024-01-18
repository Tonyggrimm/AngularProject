import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { destination } from '../model/destination.model';
import { HttpClient } from '@angular/common/http';
import { DestinationmapperService } from './destinationmapper.service';

@Injectable({
  providedIn: 'root'
})
export class DestinationApiResponseService {

  constructor(private http:HttpClient,private destinationmapper :DestinationmapperService) { }




    getAllDestinations() : Observable<destination[]>{
      return (this.http.get<destination[]>(`${"https://mocki.io/v1/7ce878fc-745c-4f01-84c7-df90d988ed60"}`))
      .pipe(map((destinationResponse)=>this.destinationmapper.toClient(destinationResponse)));
    }
  }


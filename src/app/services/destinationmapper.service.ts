import { Injectable } from '@angular/core';
import { destination } from '../model/destination.model';
import { Observable, concatMap, single } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationmapperService {
  destination!:destination[]



  manyDestinationsToClient(getResponse:destination[]):destination[]{
    return getResponse.map((singleDestination)=>({
      id:singleDestination.id,
      nomlieu:singleDestination.nomlieu,
      pays:singleDestination.pays,
      continent:singleDestination.continent,
      region:singleDestination.region,
      prix:singleDestination.prix,
      afficheUrl:singleDestination.afficheUrl,
      like:singleDestination.like,
      note:singleDestination.note,
      galerie:singleDestination.galerie
    }));
  }





  }





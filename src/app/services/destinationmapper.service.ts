//SERVICE THAT IMPLEMENTS A TO CLIENT MAPPING FUNCTION TO TRANSFORM DESTINATIONRESPONSE INTO DESTINATION MODEL

import { Injectable } from '@angular/core';
import { destination } from '../model/destination.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationmapperService {



  ToClient(getResponse:destination[]):destination[]{
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





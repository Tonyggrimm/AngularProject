//SERVICE THAT IMPLEMENTS A TO CLIENT MAPPING FUNCTION TO TRANSFORM RESPONSE INTO IMAGERESPONSE MODEL

import { Injectable } from '@angular/core';
import { BasicResponse } from '../model/BasicResponse.model';
import { ImageResponse } from '../model/ImageResponse.model';

@Injectable({
  providedIn: 'root'
})
export class PhotomapperService {

  toClient(getResponse:BasicResponse[]):ImageResponse[]{
    return getResponse.map((image)=>({
      id:image.id,
      author:image.author,
      url:image.download_url
    }));
  }

}

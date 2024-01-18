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


  getRandomImageId(min:number,max:number){
    let test =  Math.floor(Math.random() * (max - min + 1)) + min
    if(test==86){
      return 0
    }else{
      return test
    }
  }
}

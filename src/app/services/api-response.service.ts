import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';
import { BasicResponse } from '../model/BasicResponse.model';
import { PhotomapperService } from './photomapper.service';
import { map } from 'rxjs';
import { ImageResponse } from '../model/ImageResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {

    baseUrl = 'https://picsum.photos/v2/list?limit=100';


    constructor(private http:HttpClient,private photomapperservice:PhotomapperService) {}


    getImages(): Observable<ImageResponse[]> {

      return (this.http.get<BasicResponse[]>(`${this.baseUrl}`)).pipe(map((imagesResponse)=>this.photomapperservice.toClient(imagesResponse)));
    }






}

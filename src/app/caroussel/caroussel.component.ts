import { Component,OnInit,OnDestroy } from '@angular/core';
import { ApiResponseService } from '../services/api-response.service';
import { Observable, map } from 'rxjs';
import { PhotomapperService } from '../services/photomapper.service';
import { ImageResponse } from '../model/ImageResponse.model';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
})
export class CarousselComponent implements OnInit{
 images$!:Observable<ImageResponse[]>;


 constructor(private ApiResponseService : ApiResponseService,private photomapper : PhotomapperService) {}



ngOnInit(): void {
this.images$= this.ApiResponseService.getImages();


}



}

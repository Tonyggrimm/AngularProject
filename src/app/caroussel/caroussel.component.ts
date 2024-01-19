import { Component,OnInit } from '@angular/core';
import { ApiResponseService } from '../services/api-response.service';
import { Observable } from 'rxjs';
import { ImageResponse } from '../model/ImageResponse.model';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  standalone:true,
  imports:[CommonModule,NgbCarousel,NgbModule]
})
export class CarousselComponent implements OnInit{

  images$!:Observable<ImageResponse[]>;

  constructor(private ApiResponseService : ApiResponseService) {}

  ngOnInit(): void {
    this.images$= this.ApiResponseService.getImages();

  }



}

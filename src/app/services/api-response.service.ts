import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {

    baseUrl = 'https://api.teleport.org/api/urban_areas';


    constructor(private http:HttpClient) {}

    getApiDestinationMainUrl(): Observable<any> {

      return this.http.get<any>(`${this.baseUrl}`)
    }

    getApiDestinationComplexUrl(cityName :string):Observable<Object> {

      return this.http.get<Object>(`${this.baseUrl}`+"/slug:"+ cityName, {responseType:'json'})
    }

    getApiDestinationImages(cityName :string):Observable<Object> {

      return this.http.get<Object>(`${this.baseUrl}`+"/slug:"+ cityName+"/images", {responseType:'json'})
    }




}

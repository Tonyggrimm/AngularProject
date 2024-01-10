import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tpApiDestination} from '../model/teleportApiDestinations.model';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {

    baseUrl = 'https://api.teleport.org/api/urban_areas';


    constructor(private http:HttpClient) {}

    getApiDestinationMainUrl(): Observable<any> {

      return this.http.get<any>(`${this.baseUrl}`, {responseType:'json'})
    }
}

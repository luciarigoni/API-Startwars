import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starwars } from './starwars';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  //url = 'https://swapi.dev/people'

  constructor(private httpClient:HttpClient) { }

  public getallStarwars(url: string = 'https://swapi.dev/api/people'): Observable<any> {
  return this.httpClient.get<any>(url);
}

}


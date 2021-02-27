import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Records } from './model/records';
import { Response } from './model/response';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  
  private ipURL: string = 'https://jsonip.com/';
  private weatherURL: string = 'https://community-open-weather-map.p.rapidapi.com/weather?q=Tamilnadu,india&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22imperial';
  private marketDataURL: string = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset='
  constructor(private http: HttpClient) { }

  getSystemDetails():Observable<any>{
    return this.http.get(this.ipURL);
  }

  getPriceDetails(offset: number):Observable<Response>{
    return this.http.get<Response>(this.marketDataURL+offset);
  }

  getWeatherDetails():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-key": "b56e2a69demsh73211adb0af1017p1881c3jsne4b6fbafbe13",
	      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
      })
    };
    return this.http.get<any>(this.weatherURL, httpOptions);
  }
}

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../environments/environment";
import {WeatherApiResponseInterface} from "../interfaces/weather.interface";

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) {
    }

    public getWeather(lat, lon, apiKey): Observable<WeatherApiResponseInterface> {
        return this.http.get<WeatherApiResponseInterface>(`${environment.weatherApi}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    }

    public getWeatherByCityName(name, apiKey): Observable<WeatherApiResponseInterface> {
        return this.http.get<WeatherApiResponseInterface>(`${environment.weatherApi}?q=${name}&appid=${apiKey}`);
    }
}

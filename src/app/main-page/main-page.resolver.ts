import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

import {environment} from "../../environments/environment";
import {GeoService} from "../shared/services/geo.service";
import {WeatherService} from "../shared/services/weather.service";
import {WeatherApiResponseInterface} from "../shared/interfaces/weather.interface";
import {GeoResponseInterface} from "../shared/interfaces/geo.interface";

@Injectable()
export class MainPageResolver implements Resolve<any> {

    constructor(private geoService: GeoService,
                private weatherService: WeatherService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.geoService.currentCity()
            .pipe(switchMap((resp: GeoResponseInterface): Observable<WeatherApiResponseInterface> => {
                return this.weatherService.getWeather(resp.city.lat, resp.city.lon, environment.weatherApiKey)
            }));
    }
}

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../environments/environment";
import {GeoResponseInterface} from "../interfaces/geo.interface";

@Injectable()
export class GeoService {

    constructor(private http: HttpClient) {
    }

    public currentCity(): Observable<GeoResponseInterface> {
        return this.http.get<GeoResponseInterface>(environment.geoApi);
    }
}

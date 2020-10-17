import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";

import {WeatherService} from "../shared/services/weather.service";
import {GeoService} from "../shared/services/geo.service";
import {WeatherCardModule} from "../shared/modules/weather-card/weather-card.module";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {MainPageResolver} from "./main-page.resolver";

const routes = [
    {
        path: '',
        component: MainPageComponent,
        resolve: {
            currentCityWeather: MainPageResolver
        }
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        WeatherCardModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule
    ],
    declarations: [MainPageComponent],
    providers: [WeatherService, GeoService, MainPageResolver],
})
export class MainPageModule {}

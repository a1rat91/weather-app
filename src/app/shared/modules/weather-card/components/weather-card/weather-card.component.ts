import {Component, Input} from '@angular/core'

import {WeatherApiResponseInterface} from "../../../../interfaces/weather.interface";

@Component({
    selector: 'app-weather-card',
    templateUrl: './weather-card.component.html',
    styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
    @Input() public currentCityWeather: WeatherApiResponseInterface;
    public weather: WeatherApiResponseInterface;

    constructor() {
    }

    public getIconName(weather: WeatherApiResponseInterface): string {
        return `owf-${weather.weather[0].id}`
    }
}

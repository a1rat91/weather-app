import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";

import {WeatherCardComponent} from "./components/weather-card/weather-card.component";
import {TemperatureConverterPipe} from "../../pipes/temperature-converter.pipe";

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule
    ],
    declarations: [WeatherCardComponent, TemperatureConverterPipe],
    exports: [WeatherCardComponent, TemperatureConverterPipe],
})
export class WeatherCardModule {
}

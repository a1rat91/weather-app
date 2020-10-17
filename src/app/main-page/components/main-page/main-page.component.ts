import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

import {environment} from "../../../../environments/environment";
import {WeatherService} from "../../../shared/services/weather.service";
import {WeatherApiResponseInterface} from "../../../shared/interfaces/weather.interface";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
    private subscription: Subscription = new Subscription();
    public form: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private weatherService: WeatherService
    ) {
        this.cityWeatherArray.push(this.route.snapshot.data['currentCityWeather'])
    }

    public cityWeatherArray: WeatherApiResponseInterface[] = [];

    public cities = [
        {
            value: 'samara',
            viewValue: 'Samara'
        },
        {
            value: 'dimitrowgrad',
            viewValue: 'Dimitrovgrad'
        },
        {
            value: 'saransk',
            viewValue: 'Saransk'
        },
        {
            value: 'ulyanovsk',
            viewValue: 'Ulyanovsk'
        },
        {
            value: 'kazan',
            viewValue: 'Kazan'
        },
    ];

    ngOnInit(): void {
        this.initializeForm();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private initializeForm(): void {
        this.form = this.fb.group({
            citySelect: ['', Validators.required],
        });
    }

    public onSubmit(): void {
        this.subscription.add(
            this.weatherService.getWeatherByCityName(this.form.value.citySelect, environment.weatherApiKey)
                .subscribe((resp) => {
                    this.cityWeatherArray.push(resp);
                })
        );
    }
}

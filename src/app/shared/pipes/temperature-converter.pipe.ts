import { Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'CelsiusTemperature'
})
export class TemperatureConverterPipe implements PipeTransform {
    transform(value: number, args?: any): string {

        return Math.round((value - 273.15)) + '°C';
    }
}

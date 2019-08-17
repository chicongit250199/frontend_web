import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Date(value);
  }
}

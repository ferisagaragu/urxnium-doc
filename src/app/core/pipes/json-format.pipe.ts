import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonFormat'
})
export class JsonFormatPipe implements PipeTransform {

  transform(value: any): string {
    try {
      const json = JSON.parse(value);
      return JSON.stringify(json, null, 2);
    } catch (e) {
      return JSON.stringify(value, null, 2);
    }
  }

}

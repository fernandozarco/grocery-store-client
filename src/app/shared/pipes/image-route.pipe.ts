import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imageRoute'
})
export class ImageRoutePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let urlDomain: string;
    urlDomain = environment.baseUrl;
    return urlDomain + '/' + value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value.toFixed(3).slice(0, -1);
  }

}

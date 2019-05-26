import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'binaryString'
})
export class BinaryPipePipe implements PipeTransform {
  transform(value: number): string {
    let binaryString = '';
    while ( value > 0 ) {
      const remainder = Math.floor( value % 2 );
      binaryString = remainder + binaryString;
      value = Math.floor(value / 2);
    }
    return binaryString;
  }
}

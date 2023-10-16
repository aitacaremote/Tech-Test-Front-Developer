import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumerate',
  standalone: true,
})
export class EnumeratePipe implements PipeTransform {
  transform(value: number): number[] {
    return [...Array(value)].map((_, i) => i);
  }
}

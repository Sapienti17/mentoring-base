import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharsPipe',
  standalone: true,

})

export class LimitCharsPipe implements PipeTransform {
  transform(text: string): string {
    return text.length > 20 ? `${ text.slice(0, 20) }...` : text;
  }
}

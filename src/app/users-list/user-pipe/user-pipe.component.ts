import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removePhoneDashes',
  standalone: true,
})

export class RemovePhoneDashes implements PipeTransform {
  transform(phone: string): string {
    return phone.split('-').join('')
  }
}

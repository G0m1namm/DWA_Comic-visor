import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterComics'
})
export class FilterComicsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

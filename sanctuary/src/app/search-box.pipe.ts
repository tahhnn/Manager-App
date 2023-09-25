import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(value: any, searchText: string) {
    return value.filter((item: any) => item.title.toLowerCase().includes(searchText.toLocaleLowerCase()));
  }

}

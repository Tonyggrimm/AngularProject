//Pipe, that filters the destinations by a certain input
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDestination',
  standalone:true
})
export class SearchDestinationPipe implements PipeTransform {
  str!:string;
  transform(value:any,  searchtext ?:any): any {
    if(!value) return null;
    if(! searchtext) return value;

    return value.filter(function(values:any) {
      let preparedName = values.nomlieu.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let preparedContinent =values.continent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      return preparedName.includes(searchtext.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
      || preparedContinent.includes(searchtext.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));

    })

  }



}

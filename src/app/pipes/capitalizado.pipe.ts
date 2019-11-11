import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean=true): any {
    value = value.toLowerCase();
    let nombres = value.split(" ");
    console.log(nombres);

    if(todas){
      // foirin
      for (const index in nombres) {
        nombres[index]= nombres[index][0].toUpperCase()+nombres[index].substr(1)
      }
      console.log(nombres)
    }
    return nombres.join(" ");
  }

}
 
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nA',
  standalone: true
})
export class NAPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value != "" && value != null && value!= undefined){
      return value;
    } else{
      return "No Value";
    }
    
  }

}

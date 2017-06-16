import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model'

@Pipe({
  name: 'instrument',
  pure: false
})
export class InstrumentPipe implements PipeTransform {

  transform(input: Member[], instrument){
  var output: Member[] = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i].instrument === instrument) {
      output.push(input[i]);
    }
  }
  return output;
}

}

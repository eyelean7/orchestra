import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'instrument',
  pure: false
})
export class InstrumentPipe implements PipeTransform {

  transform(input: Member[], instrument) {
  let output: Member[] = [];
  if (instrument === 'allMembers') {
    output = input;
  }
  else {
    for (let i = 0; i < input.length; i++) {
      if (input[i].instrument === instrument) {
        output.push(input[i]);
      }
    }
  }
  return output;
}

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'word'
})
export class WordPipe implements PipeTransform {

  transform(str:any): any {
    var state = 0;
    var wc = 0; // word count
    var i = 0;
    
    // Scan all characters one
    // by one
    while (i < str.length)
    {
    
 
      if (str[i] == ' ' || str[i] == '\n'||
                str[i] == '\t')
        state = 0;
        

      // word count
      else if (state == 0)
      {
        state = 1;
        ++wc;
      }
  
      // Move to next character
      ++i;
    }
    
    return wc;
  }}
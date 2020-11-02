import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "capitalizado" })
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, allWords: boolean = true): string {
    let words : string[] = value.toLowerCase().split(" ");
    if (allWords)
      for(let i in words) {
        words[i] = `${words[i][0].toUpperCase()}${words[i]
            .substring(1, words[i].length)}`;
      }
    else {
      words[0] = `${words[0][0].toUpperCase()}${words[0]
        .substring(1, words[0].length)}`;
    }
    return words.join(" ");
  }
}

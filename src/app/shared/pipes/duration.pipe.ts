import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'duration'
})
// export class DurationPipe {
//     // Add your code here
// }



export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        let hours = Math.floor(value / 60);
        let minutes = Math.floor(value % 60);
        let result = `${hours}hrs ${minutes}mins`;
        return result;
    }
  }

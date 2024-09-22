import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customDate",
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string): string {
    // const [ day,month, year] = value.split("/");
    const [ month,day, year] = value.split("/");
    return `${day}.${month}.${year}`;
  }
}

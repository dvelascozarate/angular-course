import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "contrasena"
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, hide: boolean = true): any {
    if (hide) return "*".repeat(value.length);
    return value;
  }
}

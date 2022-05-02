import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
    transform(Valor: boolean): string {
        return (Valor)
            ? 'vuela'
            : 'no vuela';
    }
}
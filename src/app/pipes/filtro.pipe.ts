import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
	transform(arrelgo: any[], texto: string): any[] {
		console.log(arrelgo)
		return arrelgo
	}
}

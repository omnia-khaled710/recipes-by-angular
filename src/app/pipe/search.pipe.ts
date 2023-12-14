import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipes:any[],searchValue:string):any[] {
    return recipes.filter((recipe)=>
    {(recipe.title.toLowerCase().includes(searchValue))});
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private _HttpClient:HttpClient) { }
  getRecipes():Observable<any>{
    // return this._HttpClient.get('https://api.spoonacular.com/recipes/random?apiKey=28c2e230032c4bfaa4e4abc008e76c50')
    return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?&q=pizza')
  }
getRecipeDetails(recipe_id:any){
  return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`)
}
}

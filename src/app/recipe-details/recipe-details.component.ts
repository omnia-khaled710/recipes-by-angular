import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  recipe_id: any;
  recipeDetails:any;
  favorites: any[] = [];

constructor(private  _ActivatedRoute:ActivatedRoute,private _RecipesService:RecipesService){
  this.recipe_id=_ActivatedRoute.snapshot.paramMap.get('recipe_id')
  _RecipesService.getRecipeDetails(this.recipe_id).subscribe((data)=>{
this.recipeDetails=data
// console.log(this.recipeDetails);

  })
}
toggleFavorite(recipe: any): void {
  recipe.favorite = !recipe.favorite;

  if (recipe.favorite) {
    // Add to favorites
    this.favorites.push(recipe);
  } else {
    // Remove from favorites
    const index = this.favorites.findIndex(fav => fav.id === recipe.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }

  // Update local storage
  localStorage.setItem('favorites', JSON.stringify(this.favorites));
}
}
